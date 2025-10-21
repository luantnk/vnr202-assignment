import React, { useEffect, useRef, useState } from "react";

const DetailModal = ({ open, onClose, item }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState("summary");
  const [copied, setCopied] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setTimeout(() => closeBtnRef.current?.focus?.(), 120);
    } else {
      setVisible(false);
      setTab("summary");
      setActiveImage(null);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !item) return null;

  const images =
    item.images && item.images.length
      ? item.images
      : item.image
      ? [item.image]
      : [];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.fullText || item.summary || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.warn("copy failed", e);
    }
  };

  const handleDownload = () => {
    const filename = `${(item.title || "detail").replace(/\s+/g, "_")}.txt`;
    const blob = new Blob(
      [`# ${item.title}\n\n${item.fullText || item.summary || ""}`],
      {
        type: "text/plain;charset=utf-8",
      }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;
    w.document.write(`
      <html>
        <head>
          <title>${item.title}</title>
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <style>body{font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; padding:20px; color:#111} pre{white-space:pre-wrap;}</style>
        </head>
        <body>
          <h1>${item.title}</h1>
          <pre>${(item.fullText || item.summary || "").replace(
            /</g,
            "&lt;"
          )}</pre>
        </body>
      </html>
    `);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  // split to paragraphs
  const paragraphs = (item.fullText || item.summary || "")
    .split(/\n{1,}/)
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — chi tiết`}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl w-full max-w-4xl shadow-2xl transform transition-all duration-200 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ maxHeight: "78vh", overflow: "hidden" }}
      >
        {/* Header (sticky) */}
        <div className="flex items-start justify-between gap-4 p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 font-semibold">
              {item.step ?? ""}
            </div>
            <div className="min-w-0">
              <div className="text-sm text-gray-500">
                Bước {item.step ?? ""}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 truncate">
                {item.title}
              </h3>
              {item.subtitle && (
                <div className="text-sm text-gray-500">{item.subtitle}</div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={closeBtnRef}
              onClick={handleCopy}
              className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              title="Sao chép nội dung"
              aria-label="Sao chép nội dung"
            >
              {copied ? "Đã sao chép" : "Sao chép"}
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              title="Tải về"
              aria-label="Tải về"
            >
              Tải về
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              title="In nội dung"
              aria-label="In nội dung"
            >
              In
            </button>

            <button
              onClick={onClose}
              className="ml-1 rounded-full p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Đóng"
              title="Đóng"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body: two-column layout on md+ */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left: image / gallery */}
          <div className="w-full md:w-1/3 border-r md:border-r md:border-gray-100 p-4 flex flex-col gap-3">
            {images.length > 0 ? (
              <>
                <div className="w-full rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={activeImage || images[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>

                {images.length > 1 && (
                  <div className="flex gap-2 mt-2 overflow-x-auto">
                    {images.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(src)}
                        className={`flex-shrink-0 w-20 h-14 rounded overflow-hidden border ${
                          (activeImage || images[0]) === src
                            ? "border-blue-500"
                            : "border-gray-200"
                        }`}
                        aria-label={`Xem ảnh ${idx + 1}`}
                      >
                        <img
                          src={src}
                          alt={`thumb-${idx}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {item.imageCredit && (
                  <div className="text-xs text-gray-400 mt-1">
                    {item.imageCredit}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-48 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                Không có ảnh minh họa
              </div>
            )}

            {/* meta / tags in left column */}
            {item.tags?.length > 0 && (
              <div className="mt-3">
                <h5 className="text-sm font-medium text-gray-700 mb-2">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* small source quick links */}
            {item.sources?.length > 0 && (
              <div className="mt-auto">
                <h5 className="text-sm font-medium text-gray-700 mb-2">
                  Nguồn nhanh
                </h5>
                <ul className="space-y-2">
                  {item.sources.slice(0, 3).map((s, i) => (
                    <li key={i}>
                      <a
                        className="text-sm text-blue-600 hover:underline break-words"
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: content area (scrollable) */}
          <div
            className="w-full md:w-2/3 p-4 flex flex-col"
            style={{ maxHeight: "calc(78vh - 72px)" }}
          >
            {/* Tabs */}
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={() => setTab("summary")}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tab === "summary"
                    ? "bg-gradient-to-r from-cyan-400 to-teal-500"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-pressed={tab === "summary"}
              >
                Tóm tắt
              </button>
              <button
                onClick={() => setTab("full")}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tab === "full"
                    ? "bg-gradient-to-r from-cyan-400 to-teal-500"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-pressed={tab === "full"}
              >
                Toàn văn
              </button>
              <button
                onClick={() => setTab("sources")}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tab === "sources"
                    ? "bg-gradient-to-r from-cyan-400 to-teal-500"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-pressed={tab === "sources"}
              >
                Nguồn
              </button>
            </div>

            {/* content scroll */}
            <div className="overflow-y-auto pr-2">
              {tab === "summary" && (
                <div>
                  {item.summary ? (
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {item.summary}
                    </div>
                  ) : (
                    <div className="text-gray-700">
                      <p className="mb-2">
                        Không có tóm tắt — xem mục "Toàn văn".
                      </p>
                    </div>
                  )}

                  {/* short CTA to read more */}
                  {item.fullText && (
                    <div className="mt-4">
                      <button
                        onClick={() => setTab("full")}
                        className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-teal-500 text-white text-sm hover:brightness-105"
                      >
                        Đọc chi tiết
                      </button>
                    </div>
                  )}
                </div>
              )}

              {tab === "full" && (
                <div className="prose max-w-none">
                  {paragraphs.map((p, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {tab === "sources" && (
                <div>
                  {item.sources?.length ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {item.sources.map((s, i) => (
                        <li key={i}>
                          <a
                            className="text-blue-600 hover:underline break-words"
                            href={s.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-600">
                      Chưa có nguồn tham khảo được liệt kê.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* footer actions sticky bottom inside right column */}
            <div className="mt-4 border-t pt-3 flex items-center justify-end gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              >
                {copied ? "Đã sao chép" : "Sao chép nội dung"}
              </button>

              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              >
                Tải về
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
              >
                In
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-teal-500 text-white text-sm hover:brightness-105"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
