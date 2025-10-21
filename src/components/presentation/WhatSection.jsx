// src/components/what-section/WhatSection.jsx
import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import { missions } from "../../data/what-section-data";
import DetailModal from "../common/DetailModal";
import QuizComponent from "../modals/QuizComponent";

const DEFAULT_GRAD = "from-cyan-500 to-teal-600";
const TAG_BG = "bg-cyan-50";
const TAG_TEXT = "text-cyan-700";

const WhatSection = () => {
  const [activeDetail, setActiveDetail] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Quy trình thực hiện
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Ba bước cơ bản trong quy trình thực hiện đại đoàn kết dân tộc và
            đoàn kết quốc tế
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {missions.map((mission) => {
            const IconComponent = mission.icon || BookOpen;
            const colorClass = mission.colorClass || DEFAULT_GRAD;
            const tagBg = mission.tagBg || TAG_BG;
            const tagText = mission.tagText || TAG_TEXT;

            return (
              <article
                key={mission.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group flex flex-col h-full min-h-[380px]"
              >
                <div className="flex flex-col lg:flex-row gap-6 h-full">
                  {/* Icon */}
                  <div className="flex-shrink-0 self-start">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${colorClass}`}
                      aria-hidden="true"
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {mission.title}
                      </h3>
                      {mission.subtitle && (
                        <h4 className="text-lg font-semibold text-gray-600 mb-3">
                          {mission.subtitle}
                        </h4>
                      )}

                      {/* Summary: clamp to 3 lines so all cards have same summary height */}
                      {/* If you have @tailwindcss/line-clamp plugin, replace inline style with className="line-clamp-3" */}
                      <p
                        className="text-gray-600 leading-relaxed mb-4"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          minHeight: 72,
                        }}
                      >
                        {mission.description}
                      </p>
                    </div>

                    {/* Tags + actions aligned to bottom */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 min-h-[40px]">
                        {mission.tags?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm font-medium min-w-[92px] text-center`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-4 justify-center lg:justify-start">
                        <button
                          onClick={() => setActiveDetail(mission)}
                          className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold shadow hover:brightness-95 transition w-full sm:w-auto min-w-[150px] text-center"
                          aria-label={`Xem chi tiết ${mission.title}`}
                        >
                          Xem chi tiết
                        </button>

                        <button
                          onClick={() => {
                            if (mission.hasQuiz) setQuizOpen(true);
                            else setActiveDetail(mission);
                          }}
                          className={`px-5 py-2 rounded-lg border-2 ${
                            mission.hasQuiz
                              ? "border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                              : "border-gray-200 text-gray-600 hover:bg-gray-50"
                          } font-semibold transition w-full sm:w-auto min-w-[150px]`}
                          aria-label={`${
                            mission.hasQuiz ? "Làm quiz" : "Tìm hiểu thêm"
                          } ${mission.title}`}
                        >
                          {mission.hasQuiz ? "Làm quiz" : "Tìm hiểu thêm"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      <DetailModal
        open={!!activeDetail}
        onClose={() => setActiveDetail(null)}
        item={activeDetail}
      />
      <QuizComponent isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </section>
  );
};

export default WhatSection;
