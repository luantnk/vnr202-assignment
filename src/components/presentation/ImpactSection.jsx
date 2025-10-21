// src/components/presentation/ImpactSection.jsx
import { useState } from "react";
import { Globe, TrendingUp, Flag, Star, Users, Building2 } from "lucide-react";
import { impacts, vietnamAchievements } from "../../data/impact-section-data";
import ModalPortal from "../common/ModalPortal";

const gradientPrimary = "from-cyan-500 to-teal-600";

const ImpactSection = () => {
  const [active, setActive] = useState(null);

  return (
      
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ý nghĩa của đại đoàn kết dân tộc và đoàn kết quốc tế
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Đại đoàn kết dân tộc và đoàn kết quốc tế là nguồn sức mạnh quyết định thắng lợi và phát triển của cách mạng Việt Nam.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Global Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact) => {
            const IconComponent = impact.icon || Globe;

            return (
              <div
                key={impact.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${
                      impact.color || gradientPrimary
                    }`}
                    aria-hidden="true"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {impact.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" white-space: pre-line>
                      {impact.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActive(impact)}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium shadow hover:brightness-95 transition focus:outline-none focus:ring-4 focus:ring-cyan-200"
                      aria-label={`Xem chi tiết ${impact.title}`}
                    >
                      Xem chi tiết
                    </button>

                    
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vietnam Focus Section (teal theme) */}
        <div className="bg-teal-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc và đoàn kết quốc tế
            </h3>
            <p className="text-teal-100 text-lg max-w-4xl mx-auto">
              "Đoàn kết là quy luật, là sức mạnh vô địch của cách mạng Việt Nam"
            </p>
          </div>

          {/* Historical Quote */}
          <div
            className="bg-white bg-opacity-8 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-white/20"
            role="region"
            aria-label="Trích dẫn Hồ Chí Minh"
          >
            <blockquote className="text-center">
              {/* <-- thay text-teal-100 (quá nhạt) bằng text-white/95 để đủ contrast */}
              <p className="text-lg italic text-black/95 mb-4">
                "Đảng ta là đại biểu trung thành của giai cấp công nhân, của
                nhân dân lao động và của cả dân tộc Việt Nam"
              </p>
              {/* tác giả đứng ngoài, màu vàng nhẹ để nổi */}
              <cite className="text-amber-300 font-semibold">
                - Chủ tịch Hồ Chí Minh
              </cite>
            </blockquote>
          </div>

          {/* Vietnam Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vietnamAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon || Flag;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-teal-100 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vietnam Mission Emphasis */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              “Đại đoàn kết – Sức mạnh dân tộc và Thời đại trong tư tưởng Hồ Chí
              Minh”
            </h4>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-teal-600" />
                <h5 className="text-lg font-bold text-gray-800">
                  Nhiệm vụ hiện tại
                </h5>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Củng cố khối đại đoàn kết toàn dân.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Chủ động, linh hoạt trong đoàn kết quốc tế, hội nhập toàn
                    cầu.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Xây dựng con người Việt Nam phát triển toàn diện</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
                <h5 className="text-lg font-bold text-gray-800">
                  Tầm nhìn tương lai
                </h5>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Xây dựng Việt Nam hùng cường, sánh vai với các cường quốc
                    năm châu.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Xây dựng xã hội công bằng, dân chủ, văn minh</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Góp phần vào sự nghiệp giải phóng nhân loại</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl p-6">
            <p className="text-lg font-semibold">
              “Trong tư tưởng Hồ Chí Minh, sức mạnh vô địch của đại đoàn kết dân
              tộc kết hợp với sứ mệnh lịch sử của giai cấp công nhân chính là
              <span className="text-amber-200">
                {" "}
                nền tảng để Việt Nam phát triển hùng cường,
              </span>{" "}
              đồng thời góp phần vào sự nghiệp hòa bình, công lý và tiến bộ của
              nhân loại.
            </p>
          </div>
        </div>
      </div>
      
      <ModalPortal open={!!active}>
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    onMouseDown={() => setActive(null)}
  >
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
    <div
      className="relative z-[10000] w-full max-w-3xl rounded-2xl bg-white shadow-2xl border border-gray-200"
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${active?.color || "from-cyan-500 to-teal-600"}`}>
          {active?.icon && <active.icon className="w-5 h-5 text-white" />}
        </div>
        <h3 className="text-lg font-semibold">{active?.title}</h3>
      </div>

      {/* Body */}
      <div className="px-6 py-5 space-y-4">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {active?.fullText || active?.description}
        </p>

        {Array.isArray(active?.tags) && active.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {active.tags.map((t, i) => (
              <span key={i} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 border">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
        <button onClick={() => setActive(null)} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
          Đóng
        </button>
      </div>
    </div>
  </div>
</ModalPortal>
    </section>
  );
};

export default ImpactSection;
