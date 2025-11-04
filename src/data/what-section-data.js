import { Rocket, Globe, TrendingUp } from "lucide-react";

export const missions = [
  {
    id: "m1",
    title: "Khoán 10 - Đột phá Nông nghiệp",
    subtitle: "Nghị quyết 10 (4-1988): Giao quyền sử dụng đất cho nông dân",
    description:
      "Bước đột phá lớn trong nông nghiệp, biến Việt Nam từ nước thiếu ăn thành cường quốc xuất khẩu gạo. Đây là 'viên gạch' đầu tiên của thành công Đổi Mới.",
    fullText: `
**Bối cảnh (Ngày ấy):**
Đất nước thiếu lương thực nghiêm trọng, lạm phát phi mã (lên tới 774% năm 1986), và "nạn đói xảy ra ở nhiều nơi" vào năm 1988.

**Quyết sách (Ngày ấy):**
Đảng ban hành **Nghị quyết 10 (4-1988)**, hay còn gọi là "Khoán 10", giao quyền sử dụng đất ổn định cho nông dân trong 15 năm.

**Nội dung chính:**
- Nông dân được nhận khoán và canh tác trên diện tích ổn định
- Được quyền quyết định loại cây trồng, phương thức canh tác
- Được hưởng lợi nhuận từ sản phẩm sau khi nộp thuế
- Tạo động lực làm ăn cho nông dân

**Kết quả (Ngày ấy):**
Quyết sách này ngay lập tức tạo ra động lực. **Chỉ một năm sau**, "đến năm 1989, Việt Nam đã đáp ứng được nhu cầu lương thực, có dự trữ và bắt đầu xuất khẩu".

**Liên hệ thực tiễn (Hôm nay):**
Đây chính là "viên gạch" đầu tiên biến Việt Nam từ một nước thiếu ăn thành một trong những cường quốc xuất khẩu nông sản hàng đầu thế giới (gạo, cà phê, thủy sản, hạt điều...). Mọi người nông dân hôm nay được toàn quyền quyết định trên mảnh đất của mình, làm giàu từ nông nghiệp... tất cả bắt nguồn từ tư duy đột phá của "Khoán 10".`,
    tags: ["Khoán 10", "Nông nghiệp", "Xuất khẩu gạo"],
    icon: Rocket,
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Nghị quyết 10 về Khoán 10",
        url: "https://dangcongsan.vn",
      },
    ],
    image:
      "https://i.ibb.co/ZBpqCrZ/khoan-10.jpg",
    imageAlt: "Nông dân Việt Nam làm việc trên đồng ruộng sau Khoán 10",
  },
  {
    id: "m2",
    title: "Luật Đầu tư Nước ngoài - Mở cửa",
    subtitle:
      "Luật Đầu tư nước ngoài (hiệu lực từ 1-1-1988)",
    description:
      "Mở cửa thu hút vốn FDI, tạo nền tảng cho hàng ngàn nhà máy lớn như Samsung, LG, Intel, Canon... vào Việt Nam.",
    fullText: `**Quyết sách (Ngày ấy):**
Ngay sau Đổi Mới, chúng ta đã ban hành **Luật Đầu tư nước ngoài** (có hiệu lực từ 1-1-1988). Sau đó là hàng loạt bước đi chiến lược: bình thường hóa với Trung Quốc (1991), gia nhập ASEAN (1995), và bình thường hóa quan hệ với Hoa Kỳ (1995).

**Nội dung chính của Luật Đầu tư:**
- Tạo hành lang pháp lý rõ ràng cho nhà đầu tư nước ngoài
- Đảm bảo quyền sở hữu và chuyển lợi nhuận ra nước ngoài
- Cung cấp các ưu đãi thuế và hỗ trợ kỹ thuật
- Cho phép nhiều hình thức đầu tư: 100% vốn nước ngoài, liên doanh, hợp tác kinh doanh

**Các cột mốc quan trọng:**
- **1991:** Bình thường hóa với Trung Quốc
- **1995:** Gia nhập ASEAN - Mở cửa hội nhập khu vực
- **1995:** Thiết lập quan hệ ngoại giao với Mỹ - Phá vỡ cấm vận
- **1995:** Việt Nam có quan hệ với 160 nước

**Liên hệ thực tiễn (Hôm nay):**
Luật Đầu tư 1988 là "cánh cửa" đầu tiên. Tất cả các nhà máy lớn của Samsung, LG, Intel, Canon... và hàng ngàn dự án FDI khác chính là kết quả của việc "mở cửa" này.

Việc gia nhập ASEAN và bình thường hóa quan hệ đã "phá thế bị bao vây cấm vận". Ngày nay, người Việt Nam có thể đi du lịch tự do trong khối ASEAN; hàng hóa Việt Nam có mặt tại Mỹ, Trung Quốc và khắp thế giới. Đây chính là di sản của tầm nhìn đối ngoại giai đoạn 1991-1996.`,
    tags: ["FDI", "ASEAN", "Hội nhập"],
    icon: Globe,
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Luật Đầu tư nước ngoài 1987",
        url: "https://dangcongsan.vn",
      },
      {
        title: "Lịch sử gia nhập ASEAN",
        url: "https://mofa.gov.vn",
      },
    ],
    image:
      "https://i.ibb.co/5v7rKy8/asean-1995.jpg",
    imageAlt: "Việt Nam gia nhập ASEAN 1995",
  },
  {
    id: "m3",
    title: "Kết quả 10 năm Đổi Mới",
    subtitle: `Ra khỏi khủng hoảng - Bước vào công nghiệp hóa`,
    description: `Sau 10 năm Đổi Mới (1986-1996), Việt Nam đã ra khỏi khủng hoảng kinh tế-xã hội, sẵn sàng bước vào thời kỳ công nghiệp hóa, hiện đại hóa.`,
    fullText: `**Đại hội VIII (7-1996)** đã đưa ra nhận định lịch sử:

"Nước ta đã ra khỏi khủng hoảng kinh tế-xã hội, tuy một số mặt còn chưa vững chắc. Nhiệm vụ chuẩn bị tiền đề cho công nghiệp hoá đã cơ bản hoàn thành, cho phép chuyển sang thời kỳ mới đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước."

**Các thành tựu nổi bật:**

**1. Kinh tế:**
- GDP tăng bình quân 8,2%/năm (1991-1995), vượt kế hoạch (5,5-6,5%)
- Lạm phát giảm từ 774% (1986) xuống 12,7% (1995)
- Từ nước nhập khẩu gạo → xuất khẩu gạo (từ 1989)
- Bắt đầu có tích lũy từ nội bộ nền kinh tế

**2. Đối ngoại:**
- Phá vỡ thế bao vây, cấm vận
- Có quan hệ ngoại giao với 160 nước (1995)
- Gia nhập ASEAN (1995)
- Bình thường hóa với Trung Quốc (1991) và Mỹ (1995)

**3. Xã hội:**
- Đời sống nhân dân được cải thiện
- Xã hội ổn định hơn
- Niềm tin vào con đường Đổi Mới được củng cố

**Liên hệ thực tiễn (Hôm nay):**
Thành công của 10 năm Đổi Mới (1986-1996) là nền tảng cho sự phát triển vượt bậc của Việt Nam trong 30 năm tiếp theo. Từ một nước nghèo, bị cấm vận, đến nay Việt Nam đã trở thành nền kinh tế năng động, hội nhập sâu rộng vào nền kinh tế thế giới, là điểm đến hấp dẫn cho đầu tư FDI và là thành viên tích cực của cộng đồng quốc tế.`,
    tags: ["Thành tựu", "Phát triển", "Công nghiệp hóa"],
    icon: TrendingUp,
    colorClass: "from-teal-400 to-cyan-500",
    tagBg: "bg-teal-50",
    tagText: "text-teal-600",
    hasQuiz: false,
    sources: [
      {
        title: "Văn kiện Đại hội VIII",
        url: "https://dangcongsan.vn",
      },
      {
        title: "10 năm Đổi Mới 1986-1996",
        url: "https://dangcongsan.vn",
      },
    ],
    image: "https://i.ibb.co/QNwp5Yc/congress-viii.jpg",
    imageAlt: "Thành tựu 10 năm Đổi Mới",
  },
];

export default missions;
