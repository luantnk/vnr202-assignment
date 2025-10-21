import React from "react";
import {
  Download,
  Play,
  BookOpen,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

const CallToActionSection = () => {
  const actions = [
    {
      id: 1,
      icon: BookOpen,
      title: "Khám phá thêm về chủ nghĩa xã hội khoa học",
      description:
        "Tìm hiểu sâu hơn về lý thuyết và thực tiễn của chủ nghĩa xã hội khoa học",
      buttonText: "Khám phá ngay",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      bgColor: "bg-blue-50",
      action: () => console.log("Navigate to socialism guide"),
    },
    {
      id: 2,
      icon: Download,
      title: "Tải ngay infographic",
      description:
        "Tải về infographic tóm tắt về sứ mệnh lịch sử của giai cấp công nhân",
      buttonText: "Tải về miễn phí",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      bgColor: "bg-green-50",
      action: () => console.log("Download infographic"),
    },
    {
      id: 3,
      icon: Play,
      title: "Tham gia quiz",
      description:
        "Kiểm tra kiến thức của bạn về sứ mệnh lịch sử của giai cấp công nhân",
      buttonText: "Bắt đầu quiz",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      bgColor: "bg-purple-50",
      action: () => console.log("Start quiz"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Tiếp tục hành trình khám phá
          </h2>
          <p className="text-lg text-red-100 max-w-3xl mx-auto mb-6">
            Hãy cùng chúng tôi tìm hiểu sâu hơn về sứ mệnh lịch sử của giai cấp
            công nhân
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {actions.map((action) => {
            const IconComponent = action.icon;
            return (
              <div
                key={action.id}
                className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {action.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {action.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={action.action}
                    className={`
                      w-full px-6 py-3 bg-gradient-to-r ${action.color} ${action.hoverColor}
                      text-white font-semibold rounded-xl
                      transform transition-all duration-300 hover:scale-105
                      focus:outline-none focus:ring-4 focus:ring-opacity-50
                      flex items-center justify-center gap-2
                      shadow-lg hover:shadow-xl
                    `}
                  >
                    {action.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main CTA Section */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-20">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <Star className="w-8 h-8 text-yellow-300" />
                <Users className="w-8 h-8 text-yellow-300" />
                <Star className="w-8 h-8 text-yellow-300" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Cùng nhau xây dựng tương lai
            </h3>

            <p className="text-red-100 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Sứ mệnh lịch sử của giai cấp công nhân không chỉ là lý thuyết mà
              còn là thực tiễn sống động. Hãy cùng chúng tôi tiếp tục khám phá
              và ứng dụng những giá trị này trong cuộc sống.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="
                group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 
                hover:from-yellow-300 hover:to-orange-400 
                text-red-900 font-bold text-lg rounded-full
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50
                flex items-center gap-3
              "
              >
                <BookOpen className="w-6 h-6" />
                Tìm hiểu thêm
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                className="
                px-8 py-4 border-2 border-yellow-300 text-yellow-300 
                hover:bg-yellow-300 hover:text-red-900 
                font-bold text-lg rounded-full
                transform transition-all duration-300 hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50
                flex items-center gap-3
              "
              >
                <Users className="w-6 h-6" />
                Tham gia cộng đồng
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-red-200 text-sm">
            Đã có <span className="font-bold text-yellow-300">10,000+</span>{" "}
            người tham gia khám phá sứ mệnh lịch sử
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
