// src/components/presentation/HowSection.jsx
import React, { useState } from "react";
import { Shield, Handshake, Megaphone } from "lucide-react";
import { detailedConditions } from "../../data/how-section-details";
import DetailModal from "../common/DetailModal";

const DEFAULT_GRAD = "from-cyan-500 to-teal-600";

const HowSection = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Điều kiện để phát huy đoàn kết dân tộc
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Ba nguyên tắc then chốt — nhấn vào "Xem chi tiết" để đọc giải thích,
            ví dụ và nguồn.
          </p>
          <div className="w-24 h-1 mx-auto mt-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {detailedConditions.map((c) => {
            const Icon =
              c.icon ||
              (c.id === "c1" ? Shield : c.id === "c2" ? Handshake : Megaphone);
            const colorClass = c.colorClass || DEFAULT_GRAD;

            return (
              <article
                key={c.id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-between min-h-[320px]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon / step badge */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 bg-gradient-to-br ${colorClass}`}
                    aria-hidden="true"
                    title={`Bước ${c.step}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {c.summary}
                    </p>
                  </div>
                </div>

                {/* Tags + CTA aligned to bottom */}
                <div className="mt-6 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.tags?.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-cyan-50 text-cyan-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActive(c)}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium shadow hover:brightness-95 transition focus:outline-none focus:ring-4 focus:ring-cyan-200"
                      aria-label={`Xem chi tiết ${c.title}`}
                    >
                      Xem chi tiết
                    </button>

                    <a
                      href={c.sources?.[0]?.url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      Nguồn
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-gray-200">
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Quy trình thực hiện
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-cyan-600" />
                <span>Giữ vững độc lập, tự chủ</span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center gap-2">
                <Handshake className="w-6 h-6 text-cyan-600" />
                <span>Nguyên tắc “có lý, có tình”</span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-cyan-600" />
                <span>Giương cao ba ngọn cờ</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Các điều kiện cần được thực hiện đồng bộ, đi từ chính sách tới
              truyền thông và hợp tác quốc tế.
            </p>
          </div>
        </div>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        item={active}
      />
    </section>
  );
};

export default HowSection;
