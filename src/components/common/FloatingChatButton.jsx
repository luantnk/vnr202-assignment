// src/components/common/FloatingChatButton.jsx
import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const GEMINI_KEY = "AIzaSyDgNJi2R5ZEiHQszH8mNxwYios0ShgkAhc";
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào — tôi có thể giúp gì cho bạn?",
      isUser: false,
      time: new Date().toISOString(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const chatWindowRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const lastSeenRef = useRef(messages.length); // track seen messages

  // system prompt (Gemini context)
  const systemPrompt = {
    role: "system",
    content:
      "Bạn là trợ lý ảo cho trang học: Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc và đại đoàn kết quốc tế. Trả lời ngắn gọn, chính xác, lịch sự. Nếu người hỏi cần nguồn, gợi ý trích nguồn chính thức.",
  };

  const toggleChat = () => {
    setIsOpen((s) => {
      const next = !s;
      if (next) {
        lastSeenRef.current = messages.length;
        setUnreadCount(0);
      }
      return next;
    });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (!isOpen) {
      const newCount = Math.max(0, messages.length - lastSeenRef.current);
      setUnreadCount(newCount);
    } else {
      lastSeenRef.current = messages.length;
      setUnreadCount(0);
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const mapMessagesForApi = (localMessages) =>
    localMessages.map((m) => ({
      role: m.isUser ? "user" : "assistant",
      content: m.text,
    }));

  const extractTextFromGeminiResponse = (data) => {
    try {
      if (data?.contents?.[0]?.parts?.[0]?.text)
        return data.contents[0].parts[0].text;
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text)
        return data.candidates[0].content.parts[0].text;
      if (data?.candidates?.[0]?.content?.[0]?.text)
        return data.candidates[0].content[0].text;
      if (data?.candidates?.[0]?.message?.content?.[0]?.parts?.[0]?.text)
        return data.candidates[0].message.content[0].parts[0].text;
      if (data?.candidates?.[0]?.message?.content?.[0]?.text)
        return data.candidates[0].message.content[0].text;
      if (data?.output?.[0]?.content?.[0]?.text)
        return data.output[0].content[0].text;
      if (typeof data === "string") return data;
      if (data?.text) return data.text;
      return JSON.stringify(data).slice(0, 2000);
    } catch (e) {
      return "Xin lỗi, tôi không trả lời được lúc này.";
    }
  };

  const TypingDots = () => (
    <div className="inline-flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-75" />
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150" />
      <style>{`
        .delay-75 { animation-delay: 0.08s; }
        .delay-150 { animation-delay: 0.16s; }
      `}</style>
    </div>
  );

  // ===== handleSendMessage (DIRECT call to Gemini) =====
  const handleSendMessage = async (e) => {
    e?.preventDefault();
    const text = newMessage.trim();
    if (!text || isSending) return;

    const userMessage = {
      id: Date.now(),
      text,
      isUser: true,
      time: new Date().toISOString(),
    };

    // add user message first
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsSending(true);

    // typing placeholder id
    const typingId = `typing-${Date.now()}`;

    // add typing placeholder ONLY IF there's no existing typing placeholder
    setMessages((prev) => {
      const hasTyping = prev.some((m) => m.typing);
      if (hasTyping) return prev;
      return [...prev, { id: typingId, text: "", isUser: false, typing: true }];
    });

    try {
      const recent = mapMessagesForApi(messages.slice(-6));
      const payloadMessages = [
        systemPrompt,
        ...recent,
        { role: "user", content: text },
      ];

      const prompt = payloadMessages
        .map((m) =>
          m.role === "system"
            ? `[SYSTEM] ${m.content}`
            : m.role === "user"
            ? `[USER] ${m.content}`
            : `[ASSISTANT] ${m.content}`
        )
        .join("\n");

      const body = {
        model: GEMINI_MODEL,
        contents: [{ parts: [{ text: prompt }] }],
      };

      const resp = await fetch(
        `${GEMINI_API_BASE}/models/${GEMINI_MODEL}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": GEMINI_KEY,
          },
          body: JSON.stringify(body),
        }
      );

      // remove typing placeholder (if still present)
      setMessages((prev) => prev.filter((x) => x.id !== typingId));

      if (!resp.ok) {
        const errText = await resp.text().catch(() => "");
        throw new Error(`API ${resp.status}: ${errText || resp.statusText}`);
      }

      const data = await resp.json();
      const botText =
        extractTextFromGeminiResponse(data) ||
        "Xin lỗi, tôi không nhận được câu trả lời rõ ràng.";

      const botMessage = {
        id: Date.now() + 1,
        text: botText,
        isUser: false,
        time: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error", err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text:
            err?.message?.includes("CORS") || err?.message?.includes("403")
              ? "Lỗi truy cập API (CORS/permission)."
              : "Lỗi mạng / API. Thử lại sau.",
          isUser: false,
          time: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsSending(false);
      // ensure typing placeholder cleaned up
      setMessages((prev) => prev.filter((m) => !m.typing));
    }
  };
  // ===== end handleSendMessage =====

  // handle Enter (send) vs Shift+Enter (newline)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const fmtTime = (iso) => {
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="absolute bottom-16 left-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 border border-gray-200"
          style={{ maxHeight: "70vh" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
                AI
              </div>
              <div>
                <div className="text-sm font-semibold">Trợ lý AI</div>
                <div className="text-xs text-slate-200 opacity-80">
                  Tư tưởng Hồ Chí Minh — Đại đoàn kết
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <div className="bg-amber-400 text-slate-900 text-xs font-semibold px-2 py-0.5 rounded-md">
                  {unreadCount}
                </div>
              )}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Đóng chat"
                className="rounded-full p-1 hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className="p-3 overflow-y-auto"
            style={{ maxHeight: "calc(70vh - 180px)" }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`mb-3 flex ${
                  m.isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!m.isUser && (
                  <div className="flex-shrink-0 mr-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 text-xs font-semibold">
                      AI
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[80%] ${
                    m.isUser ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      m.isUser
                        ? "bg-indigo-600 text-white rounded-br-sm"
                        : "bg-slate-100 text-slate-800 rounded-bl-sm"
                    }`}
                    style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                  >
                    {m.typing ? <TypingDots /> : m.text}
                  </div>
                  <div
                    className={`text-[11px] mt-1 ${
                      m.isUser ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {m.time ? fmtTime(m.time) : ""}
                  </div>
                </div>
                {m.isUser && (
                  <div className="flex-shrink-0 ml-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-semibold">
                      T
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 px-3 py-3 flex items-center gap-2"
          >
            <textarea
              ref={inputRef}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Gõ câu hỏi (ví dụ: Đại đoàn kết dân tộc là gì?)"
              className="flex-grow resize-none h-10 max-h-28 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-300"
            />
            <button
              type="submit"
              disabled={isSending || !newMessage.trim()}
              className={`w-10 h-10 rounded-md flex items-center justify-center ${
                isSending || !newMessage.trim()
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
              aria-label="Gửi tin nhắn"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={toggleChat}
        className={`relative p-3 md:p-4 rounded-full shadow-xl focus:outline-none focus:ring-2 transition-all duration-200 transform hover:scale-105 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-indigo-600 hover:bg-indigo-700"
        } text-white`}
        aria-label={isOpen ? "Đóng chat" : "Mở chat (Trợ lý AI)"}
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}

        {/* small AI badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-900 text-[11px] font-semibold px-1 rounded-full">
            AI
          </span>
        )}

        {/* optional: pulsing glow to attract attention when unread */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute inset-0 rounded-full animate-pulse opacity-30 pointer-events-none"></span>
        )}
      </button>
    </div>
  );
};

export default FloatingChatButton;
