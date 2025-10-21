// src/components/presentation/WhySection.jsx
import React, { useState } from "react";
import { Cog, Factory, Users } from "lucide-react";
import { reasons } from "../../data/why-section-data";
import DetailModal from "../common/DetailModal";

const WhySection = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Vì sao cần đoàn kết?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Những lý do quan trọng cho việc xây dựng và phát huy sức mạnh đoàn
            kết — nhìn sâu vào mục tiêu, lợi ích và cách vận dụng.
          </p>
          <div className="w-24 h-1 mx-auto mt-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon || Cog;
            // allow per-item override via reason.colorClass, else default cyan->teal
            const colorClass = reason.colorClass || "from-cyan-500 to-teal-500";

            return (
              <article
                key={reason.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col"
                style={{ minHeight: 360 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md bg-gradient-to-br ${colorClass}`}
                    aria-hidden="true"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title + short */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {reason.title}
                  </h3>

                  <p
                    className="text-gray-600 leading-relaxed text-sm mb-4"
                    style={{ minHeight: 64 }} // ensure same vertical rhythm
                  >
                    {reason.description}
                  </p>

                  {/* tags */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {reason.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 min-w-[80px] text-center rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setActive(reason)}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold shadow hover:brightness-95 transition focus:outline-none focus:ring-4 focus:ring-cyan-200"
                        aria-label={`Xem chi tiết ${reason.title}`}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-cyan-600" />
                <Cog className="w-5 h-5 text-cyan-600" />
                <Users className="w-5 h-5 text-cyan-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Tổng kết</h4>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Đoàn kết dân tộc và đoàn kết quốc tế là{" "}
              <span className="font-semibold text-cyan-700">
                sức mạnh to lớn để xây dựng và bảo vệ Tổ quốc, phát triển đất
                nước
              </span>{" "}
              trong thời đại toàn cầu hóa — được thực hiện bằng đường lối đúng
              đắn, chính sách phù hợp và tinh thần đồng lòng.
            </p>
          </div>
        </div>
      </div>

      {/* modal */}
      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        item={active}
      />
    </section>
  );
};

export default WhySection;
