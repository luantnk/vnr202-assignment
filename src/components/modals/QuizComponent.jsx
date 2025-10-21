// src/components/modals/QuizComponent.jsx
import React, { useState, useEffect, useCallback } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Award,
  Clock,
  BookOpen,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { quiz } from "../../data/quiz";

/**
 * QuizComponent
 * - Theme: cyan / teal consistent
 * - Styles: nicer spacing, consistent button heights, clearer selected option UI
 * - Works with quiz array length (e.g. 40 questions)
 */

const ACCENT_FROM = "from-cyan-500";
const ACCENT_TO = "to-teal-600";
const ACCENT_BG = "bg-cyan-50";
const ACCENT_TEXT = "text-cyan-700";
const BTN_HEIGHT = "h-10";

const QuizComponent = ({ isOpen, onClose }) => {
  const INITIAL_TIME = 20 * 60; // 20 phút in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (quizStarted && !showResults && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults && quizStarted) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizStarted, showResults]);

  // ESC to close (with confirm logic)
  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(INITIAL_TIME);
    setQuizStarted(false);
    setScore(0);
  }, []);

  const confirmClose = useCallback(() => {
    const hasProgress =
      quizStarted && !showResults && Object.keys(selectedAnswers).length > 0;
    if (hasProgress) {
      const ok = window.confirm(
        "Bạn đang làm quiz và có tiến độ. Đóng sẽ mất tiến độ hiện tại. Bạn có chắc muốn đóng?"
      );
      if (!ok) return;
    }
    resetQuiz();
    onClose?.();
  }, [quizStarted, showResults, selectedAnswers, onClose, resetQuiz]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        if (isOpen) confirmClose();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, confirmClose]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const getScoreColor = () => {
    const percentage = (score / quiz.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = () => {
    const percentage = (score / quiz.length) * 100;
    if (percentage >= 90)
      return "Xuất sắc! Bạn đã nắm vững kiến thức về Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc và đại đoàn kết quốc tế.";
    if (percentage >= 80) return "Tốt! Bạn có hiểu biết khá tốt về chủ đề này.";
    if (percentage >= 60) return "Khá! Bạn nên ôn tập thêm một số nội dung.";
    return "Cần cải thiện! Hãy học kỹ lại lý thuyết về chủ đề này.";
  };

  // close when clicking overlay
  const handleOverlayClick = () => {
    confirmClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quiz modal"
      onClick={handleOverlayClick}
    >
      {/* MODAL */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={confirmClose}
          aria-label="Đóng quiz"
          className="absolute top-3 right-3 z-50 rounded-full p-2 text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-white transition"
        >
          <XCircle className="w-6 h-6" />
        </button>

        <div className="flex flex-col">
          {!quizStarted && !showResults ? (
            /* Intro */
            <div className="p-8 text-center">
              <div
                className={`rounded-2xl mb-6 p-6 text-white bg-gradient-to-r ${ACCENT_FROM} ${ACCENT_TO}`}
              >
                <BookOpen className="w-14 h-14 mx-auto mb-3 text-white" />
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  Quiz: Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc và đại đoàn
                  kết quốc tế
                </h2>
                <p className="text-cyan-100 text-sm">
                  Kiểm tra nhanh kiến thức chính — hoàn thành để xem kết quả
                  ngay.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="rounded-xl p-4 border border-gray-100 shadow-sm">
                  <Clock className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Thời gian</h3>
                  <p className="text-cyan-600">20 phút</p>
                </div>

                <div className="rounded-xl p-4 border border-gray-100 shadow-sm">
                  <BookOpen className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Số câu hỏi</h3>
                  <p className="text-cyan-600">{quiz.length} câu</p>
                </div>

                <div className="rounded-xl p-4 border border-gray-100 shadow-sm">
                  <Award className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">
                    Điểm tham khảo
                  </h3>
                  <p className="text-cyan-600">
                    ≥ {(quiz.length * 0.75) | 0}/{quiz.length}
                  </p>
                </div>
              </div>

              {/* <div className="rounded-xl p-4 border border-gray-100 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Lưu ý:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mỗi câu chỉ có một đáp án đúng</li>
                  <li>• Bạn có thể sửa đáp án trước khi nộp</li>
                  <li>• Thời gian: 20 phút</li>
                  <li className="text-xs text-gray-500 mt-2">
                    (Đóng cửa sổ khi chưa nộp sẽ mất tiến độ)
                  </li>
                </ul>
              </div> */}

              <div className="flex gap-4 justify-center mb-2">
                <button
                  onClick={() => setQuizStarted(true)}
                  className={`px-8 py-3 bg-gradient-to-r ${ACCENT_FROM} ${ACCENT_TO} text-white font-bold rounded-xl flex items-center gap-2 transform transition-all duration-300 hover:scale-105 ${BTN_HEIGHT}`}
                >
                  Bắt đầu quiz
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={confirmClose}
                  className={`px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl flex items-center gap-2 transform transition-all duration-300 hover:bg-gray-50 ${BTN_HEIGHT}`}
                >
                  Huỷ bỏ
                </button>
              </div>

              <div className="h-6" />
            </div>
          ) : showResults ? (
            /* Results */
            <div className="p-8">
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    score >= quiz.length * 0.6 ? "bg-emerald-50" : "bg-red-50"
                  }`}
                >
                  <Award
                    className={`w-10 h-10 ${
                      score >= quiz.length * 0.6
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Kết quả bài quiz
                </h2>
                <div
                  className={`text-3xl md:text-4xl font-bold mb-4 ${getScoreColor()}`}
                >
                  {score}/{quiz.length}
                </div>
                <div
                  className={`text-xl font-semibold mb-4 ${getScoreColor()}`}
                >
                  {Math.round((score / quiz.length) * 100)}%
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {getScoreMessage()}
                </p>
              </div>

              {/* Detailed Results */}
              <div className="max-h-96 overflow-y-auto mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Chi tiết kết quả:
                </h3>
                <div className="space-y-4">
                  {quiz.map((q, index) => {
                    const userAnswer = selectedAnswers[q.id];
                    const isCorrect = userAnswer === q.answer;
                    return (
                      <div
                        key={q.id}
                        className={`border rounded-lg p-4 ${
                          isCorrect
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-red-200 bg-red-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </div>

                          <div className="flex-1">
                            <p className="font-medium text-gray-800 mb-2">
                              Câu {index + 1}: {q.question}
                            </p>
                            <div className="text-sm">
                              <p className="text-gray-600">
                                Bạn chọn:{" "}
                                <span
                                  className={
                                    userAnswer
                                      ? "font-semibold"
                                      : "text-gray-400"
                                  }
                                >
                                  {userAnswer
                                    ? `${userAnswer}. ${q.options[userAnswer]}`
                                    : "Không trả lời"}
                                </span>
                              </p>
                              {!isCorrect && (
                                <p className="text-emerald-600 mt-1">
                                  Đáp án đúng:{" "}
                                  <span className="font-semibold">
                                    {q.answer}. {q.options[q.answer]}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => {
                    resetQuiz();
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-700 hover:to-teal-800 text-white font-semibold rounded-xl flex items-center gap-2 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Làm lại
                </button>
                <button
                  onClick={confirmClose}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300"
                >
                  Đóng
                </button>
              </div>
            </div>
          ) : (
            /* Questions UI */
            <div className="flex flex-col h-full">
              {/* Header */}
              <div
                className={`text-white pt-12 p-4 md:pt-14 md:p-6 rounded-t-3xl bg-gradient-to-r ${ACCENT_FROM} ${ACCENT_TO}`}
              >
                <div className="flex justify-between items-center">
                  <div className="w-full pr-4">
                    <h2 className="text-lg md:text-xl font-bold">
                      Câu {currentQuestion + 1}/{quiz.length}
                    </h2>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            ((currentQuestion + 1) / quiz.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-right ml-4">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-5 h-5" />
                      <span className="font-mono text-lg">
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Question Content */}
              <div className="flex-1 p-4 md:p-6 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
                    {quiz[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {Object.entries(quiz[currentQuestion].options).map(
                      ([key, value]) => (
                        <label
                          key={key}
                          className={`block p-3 md:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-sm ${
                            selectedAnswers[quiz[currentQuestion].id] === key
                              ? "border-cyan-500 bg-cyan-50 shadow-sm"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name={`question-${quiz[currentQuestion].id}`}
                              value={key}
                              checked={
                                selectedAnswers[quiz[currentQuestion].id] ===
                                key
                              }
                              onChange={() =>
                                handleAnswerSelect(
                                  quiz[currentQuestion].id,
                                  key
                                )
                              }
                              className="w-5 h-5 text-cyan-600 accent-cyan-600"
                            />
                            <span
                              className={`font-semibold ${
                                selectedAnswers[quiz[currentQuestion].id] ===
                                key
                                  ? "text-cyan-700"
                                  : "text-gray-700"
                              } min-w-[26px]`}
                            >
                              {key}.
                            </span>
                            <span className="text-gray-800">{value}</span>
                          </div>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="border-t p-4 md:p-6 rounded-b-3xl bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                  <div className="flex gap-2 w-full md:w-auto">
                    <button
                      onClick={() =>
                        setCurrentQuestion(Math.max(0, currentQuestion - 1))
                      }
                      disabled={currentQuestion === 0}
                      className="px-3 md:px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 flex items-center gap-2 transition-all duration-200"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Câu trước
                    </button>
                    <div className="hidden md:flex items-center px-3 py-2 rounded-lg text-sm text-gray-600 bg-gray-50 border border-gray-100">
                      Đã trả lời:{" "}
                      <span className="font-semibold ml-2">
                        {Object.keys(selectedAnswers).length}/{quiz.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <div className="md:hidden text-sm text-gray-600">
                      Đã trả lời: {Object.keys(selectedAnswers).length}/
                      {quiz.length}
                    </div>

                    {currentQuestion < quiz.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-200"
                      >
                        Câu tiếp
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={
                          Object.keys(selectedAnswers).length < quiz.length
                        }
                        className="px-6 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-200"
                      >
                        Nộp bài
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
