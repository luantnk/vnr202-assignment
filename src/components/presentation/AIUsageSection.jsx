import { Shield, CheckCircle, FileText, Lightbulb, BookOpen } from "lucide-react";

const AIUsageSection = () => {
  const aiUsageData = [
    {
      icon: FileText,
      title: "Minh bạch về sử dụng AI",
      description: "Liệt kê đầy đủ công cụ, mục đích, prompt và kết quả sử dụng AI trong dự án",
      color: "from-blue-500 to-cyan-500",
      details: [
        "Công cụ: Windsurf AI Editor, Claude, ChatGPT",
        "Mục đích: Hỗ trợ nghiên cứu, tạo sơ đồ, thiết kế quiz, chatbot",
        "Prompt chính: Phân tích văn kiện Đại hội, tổng hợp thông tin lịch sử",
        "Kết quả: Draft nội dung, cấu trúc thông tin, gợi ý thiết kế",
        "Chỉnh sửa: Kiểm chứng bằng giáo trình LLCT, Nghị quyết Đảng, điều chỉnh nội dung"
      ]
    },
    {
      icon: Shield,
      title: "Trách nhiệm kiểm chứng",
      description: "Mọi thông tin AI sinh ra đều được đối chiếu với nguồn chính thống",
      color: "from-emerald-500 to-teal-500",
      details: [
        "Nguồn chính thống: Giáo trình Lịch sử Đảng, Văn kiện Đại hội VI-VIII",
        "Kiểm chứng: Đối chiếu từng con số, ngày tháng, sự kiện lịch sử",
        "Trách nhiệm: Sinh viên chịu trách nhiệm hoàn toàn về nội dung cuối cùng",
        "Chỉnh sửa: Điều chỉnh, bổ sung, xóa bỏ thông tin không chính xác"
      ]
    },
    {
      icon: Lightbulb,
      title: "Sáng tạo trong ứng dụng",
      description: "AI chỉ hỗ trợ, không thay thế hoàn toàn công việc nghiên cứu và sáng tạo",
      color: "from-violet-500 to-purple-500",
      details: [
        "Vai trò AI: Công cụ hỗ trợ, không phải người thực hiện chính",
        "Sáng tạo: Thiết kế giao diện, tổ chức thông tin, cách trình bày",
        "Tích hợp: Quiz tương tác, chatbot hỏi đáp, timeline trực quan",
        "Giá trị gia tăng: Sinh viên chủ động chọn lọc, sắp xếp và trình bày"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" id="ai-usage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">AI Usage & Academic Integrity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cam kết Liêm chính Học thuật
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sử dụng AI một cách có trách nhiệm, minh bạch và sáng tạo trong học thuật
          </p>
        </div>

        {/* AI Usage Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {aiUsageData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Academic Integrity Commitment */}
        <div 
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Cam kết Liêm chính Học thuật</h3>
              <p className="text-blue-100">
                Tuân thủ đầy đủ nguyên tắc sử dụng AI trong học thuật
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <h4 className="font-semibold">Cam kết bằng văn bản</h4>
              </div>
              <p className="text-sm text-blue-100">
                Khẳng định không để AI làm thay hoàn toàn, có phụ lục chi tiết về việc sử dụng AI
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <h4 className="font-semibold">Phân định rõ ràng</h4>
              </div>
              <p className="text-sm text-blue-100">
                Có phân định rõ AI output và phần sinh viên chỉnh sửa/biên soạn
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <h4 className="font-semibold">Đối chiếu nguồn</h4>
              </div>
              <p className="text-sm text-blue-100">
                Có đối chiếu nguồn chính thống cho thông tin do AI sinh ra
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-sm text-blue-100 text-center">
              <span className="font-semibold">Nguồn tham khảo chính thống:</span> Giáo trình Lịch sử Đảng Cộng sản Việt Nam, 
              Văn kiện Đại hội VI, VII, VIII của Đảng, Nghị quyết 10-NQ/TW, Cương lĩnh 1991
            </p>
          </div>
        </div>

        {/* Student Responsibility Statement */}
        <div 
          className="mt-8 bg-white rounded-xl p-6 border-2 border-blue-200 shadow-md"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-2">Tuyên bố của Sinh viên</h4>
              <p className="text-gray-700 leading-relaxed">
                Tôi xác nhận rằng tất cả nội dung trong đồ án này là kết quả của quá trình nghiên cứu, 
                học tập của bản thân. AI chỉ được sử dụng như một công cụ hỗ trợ trong việc tổ chức thông tin, 
                thiết kế giao diện và tạo các tính năng tương tác. Mọi thông tin lịch sử, số liệu, 
                và nội dung học thuật đều được kiểm chứng cẩn thận từ các nguồn chính thống. 
                Tôi chịu hoàn toàn trách nhiệm về tính chính xác và tính liêm chính của đồ án này.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Sinh viên thực hiện:</span> [Họ tên sinh viên]
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Lớp:</span> VNR202 | <span className="font-semibold">Ngày:</span> {new Date().toLocaleDateString('vi-VN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIUsageSection;
