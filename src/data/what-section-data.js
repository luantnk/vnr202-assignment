import { BookOpen, Building, DollarSign, Users } from "lucide-react";

export const missions = [
  {
    id: "m1",
    title: "Quán triệt tư tưởng và đường lối",
    subtitle: "Quán triệt tư tưởng Hồ Chí Minh về đại đoàn kết",
    description:
      "Quán triệt tư tưởng Hồ Chí Minh và đường lối Đảng về đại đoàn kết là nền tảng không thể thiếu, tạo động lực và định hướng cho sự nghiệp xây dựng và bảo vệ đất nước.",
    fullText: `
Tuyên truyền sâu rộng tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân, xem đây là chiến lược cơ bản, lâu dài, xuyên suốt trong mọi giai đoạn lịch sử và phát triển. Tập trung vào các giá trị cốt lõi như lòng yêu nước, nhân nghĩa, và đoàn kết, đảm bảo mọi tầng lớp nhân dân hiểu rõ ý nghĩa và tầm quan trọng của đại đoàn kết.
Đặt ra các mục tiêu rõ ràng như độc lập dân tộc, dân chủ, phồn vinh, và hạnh phúc cho toàn dân, làm điểm tựa để tạo sự đồng thuận, động viên mọi lực lượng tham gia, từ công nhân, nông dân đến trí thức và các tầng lớp khác.

Ví dụ thực tế:
- Thành lập Mặt trận Việt Minh (1941) dưới sự lãnh đạo của Hồ Chí Minh để tập hợp lực lượng chống thực dân Pháp, thể hiện tư tưởng đoàn kết từ sớm.
- Đại hội XIII Đảng (2021) bổ sung phương châm đại đoàn kết trong Cương lĩnh xây dựng đất nước, khẳng định vai trò chiến lược.`,
    tags: ["Tư tưởng Hồ Chí Minh", "Giáo dục chính trị", "Tuyên truyền"],
    icon: Users,
    // soft indigo → sky
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Giáo trình tư tưởng Hồ Chí Minh",
        url: "https://dilib.vn/pdf/viewer.php?id=ead4ec",
      },
      {
        title: "Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc",
        url: "https://ldld.quangbinh.gov.vn/3cms/Ban-in-507.htm?art=13969217229087",
      },
    ],
    image:
      "https://th.bing.com/th/id/R.bffafb212459d993cb40398bd289586d?rik=teovNxx%2fJj%2bXZw&riu=http%3a%2f%2ftinhdoandaknong.org.vn%2fimages%2f10-2019%2fYThucTonTrongNhanDan-Copy.jpg&ehk=Jnyg5S729kfx8ML4hppHpZAzLn7FtyHu6QWtXPrr9Mw%3d&risl=&pid=ImgRaw&r=0",
    imageAlt: "Giao lưu quốc tế - minh hoạ đoàn kết quốc tế",
  },
  {
    id: "m2",
    title: "Xây dựng nền tảng và mở rộng đoàn kết",
    subtitle:
      "Xây dựng liên minh công nhân, nông dân, trí thức và các tầng lớp khác",
    description:
      "Xây dựng nền tảng và mở rộng đoàn kết là bước quan trọng để tạo sức mạnh tổng hợp, đảm bảo sự tham gia của mọi tầng lớp vào sự nghiệp phát triển đất nước.",
    fullText: `Xây dựng nền tảng: Tập trung xây dựng liên minh công nhân, nông dân, và trí thức làm gốc rễ cho khối đại đoàn kết, dựa trên nguyên tắc đoàn kết giai cấp và thống nhất mục tiêu.
Mở rộng đoàn kết: Mở rộng sang các tầng lớp khác như doanh nhân, tôn giáo, dân tộc thiểu số, kiều bào, thông qua chính sách khoan dung, xóa bỏ thành kiến, và tạo điều kiện tham gia phát triển đất nước.
Thực hiện dân chủ: Phát huy dân chủ, khuyến khích sự đa dạng nhưng thống nhất, thu hẹp khoảng cách giữa các nhóm để tăng cường sự gắn kết và đồng thuận.
Ví dụ:
- Hồ Chí Minh thành lập Mặt trận Việt Minh (1941) với liên minh công-nông-trí làm nền tảng chống thực dân.
- Hiện nay, Nghị quyết 41-NQ/TW (2023) thúc đẩy vai trò doanh nhân trong đoàn kết kinh tế.
- Các chương trình hỗ trợ đồng bào dân tộc thiểu số, như xóa đói giảm nghèo, thể hiện mở rộng đoàn kết.`,
    tags: ["Liên minh", "Dân chủ", "Đoàn kết"],
    icon: Building,
    // đổi từ harsh rose→amber thành teal→cyan mềm hơn
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false, // <-- đã tắt quiz cho mission này
    sources: [
      {
        title: "Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc",
        url: "https://ldld.quangbinh.gov.vn/3cms/Ban-in-507.htm?art=13969217229087",
      },
    ],
    image:
      "https://tse2.mm.bing.net/th/id/OIP.1PMPe9MNBd3r5AbZl0Dk5QHaEd?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Giao lưu quốc tế - minh hoạ đoàn kết quốc tế",
  },
  {
    id: "m3",
    title: "Giám sát, chống chia rẽ và đánh giá",
    subtitle: ``,
    description: `Chống âm mưu chia rẽ, chủ nghĩa cá nhân, thực hiện dân chủ để tạo đồng thuận.
Định kỳ đánh giá, điều chỉnh để duy trì đoàn kết bền vững, hướng tới mục tiêu dân giàu nước mạnh.`,
    fullText: `- Giám sát và thực hiện: Theo dõi chặt chẽ các hoạt động đoàn kết, đảm bảo thực hiện đúng chính sách Đảng và Nhà nước, phát huy vai trò Mặt trận Tổ quốc trong giám sát cộng đồng.
- Chống chia rẽ: Ngăn chặn âm mưu chia rẽ từ bên ngoài và bên trong như chủ nghĩa cá nhân, tham nhũng, thông qua tuyên truyền và xử lý nghiêm các hành vi gây mất đoàn kết.
- Đánh giá và điều chỉnh: Định kỳ đánh giá hiệu quả các phong trào đoàn kết, rút kinh nghiệm và điều chỉnh chính sách để duy trì sự bền vững, đáp ứng nhu cầu phát triển đất nước.`,
    tags: ["Giám sát", "Phòng chống chia rẽ", "Bền vững"],
    icon: DollarSign,
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Đại đoàn kết toàn dân tộc",
        url: "https://www.tapchicongsan.org.vn/media-story/-/asset_publisher/V8hhp4dK31Gf/content/dai-doan-ket-toan-dan-toc-coi-nguon-cua-y-chi-niem-tin-suc-manh-de-xay-dung-bao-ve-to-quoc-trong-ky-nguyen-moi",
      },
      {
        title: "Đấu tranh phòng, chống các âm mưu",
        url: "https://lyluanchinhtri.vn/dau-tranh-phong-chong-cac-am-muu-thu-doan-loi-dung-phan-bien-xa-hoi-chong-pha-cach-mang-viet-nam-6496.html?utm_source=chatgpt.com",
      },
    ],
    image: "https://tttctt.1cdn.vn/thumbs/1200x630/2023/02/03/anh-2-8-.jpg",
    imageAlt: "Giao lưu quốc tế - minh hoạ đoàn kết quốc tế",
  },
];

export default missions;
