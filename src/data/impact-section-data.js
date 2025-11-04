import { Rocket, TrendingUp, Flag, Star, Users, Building2 } from "lucide-react";

export const impacts = [
  {
    id: 1,
    icon: Rocket,
    title: "Từ Khoán 10 đến Cường quốc Nông sản",
    description:
      "Nghị quyết 10 (Khoán 10) đã tạo ra bước ngoặt lịch sử, biến Việt Nam từ nước thiếu ăn thành một trong những cường quốc xuất khẩu nông sản hàng đầu thế giới.",
    fullText: `**Bối cảnh (Ngày ấy):**
Đất nước thiếu lương thực nghiêm trọng, lạm phát phi mã (lên tới 774% năm 1986), và "nạn đói xảy ra ở nhiều nơi" vào năm 1988.

**Quyết sách (Ngày ấy):**
Đảng ban hành Nghị quyết 10 (4-1988), hay còn gọi là "Khoán 10", giao quyền sử dụng đất ổn định cho nông dân.

**Kết quả (Ngày ấy):**
Quyết sách này ngay lập tức tạo ra động lực. Chỉ một năm sau, "đến năm 1989, Việt Nam đã đáp ứng được nhu cầu lương thực, có dự trữ và bắt đầu xuất khẩu".

**Liên hệ thực tiễn (Hôm nay):**
Đây chính là "viên gạch" đầu tiên biến Việt Nam từ một nước thiếu ăn thành một trong những cường quốc xuất khẩu nông sản hàng đầu thế giới:
- **Gạo:** Việt Nam là một trong 3 nước xuất khẩu gạo lớn nhất thế giới
- **Cà phê:** Đứng thứ 2 thế giới về xuất khẩu cà phê
- **Hạt điều:** Xuất khẩu hạt điều lớn nhất thế giới
- **Thủy sản:** Trong top đầu thế giới về xuất khẩu thủy sản

Mọi người nông dân hôm nay được toàn quyền quyết định trên mảnh đất của mình, làm giàu từ nông nghiệp... tất cả bắt nguồn từ tư duy đột phá của "Khoán 10".`,
    tags: ["Khoán 10", "Nông nghiệp", "Xuất khẩu"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-800",
  },
  {
    id: 2,
    icon: Building2,
    title: "Từ Mở cửa đến Dòng vốn FDI",
    description:
      "Luật Đầu tư nước ngoài 1987 mở cửa cho FDI, tạo nền tảng cho hàng ngàn dự án đầu tư lớn như Samsung, LG, Intel vào Việt Nam và hội nhập quốc tế sâu rộng.",
    fullText: `**Quyết sách (Ngày ấy):**
Ngay sau Đổi Mới, chúng ta đã ban hành "Luật Đầu tư nước ngoài" (có hiệu lực từ 1-1-1988). Sau đó là hàng loạt bước đi chiến lược:
- Bình thường hóa với Trung Quốc (1991)
- Gia nhập ASEAN (28-7-1995)
- Bình thường hóa quan hệ với Hoa Kỳ (11-7-1995)

**Liên hệ thực tiễn (Hôm nay):**
Luật Đầu tư 1988 là "cánh cửa" đầu tiên. Tất cả các nhà máy lớn của Samsung, LG, Intel, Canon... và hàng ngàn dự án FDI khác chính là kết quả của việc "mở cửa" này:

**Các dự án FDI lớn:**
- **Samsung:** Đầu tư hàng chục tỷ USD, biến Việt Nam thành trung tâm sản xuất điện tử lớn
- **LG:** Nhà máy sản xuất điện tử tiêu dùng và linh kiện
- **Intel:** Nhà máy sản xuất chip và linh kiện điện tử
- **Canon, Panasonic, Sony:** Các nhà máy sản xuất thiết bị điện tử

**Hội nhập quốc tế:**
Việc gia nhập ASEAN và bình thường hóa quan hệ đã "phá thế bị bao vây cấm vận". Ngày nay:
- Người Việt Nam có thể đi du lịch tự do trong khối ASEAN
- Hàng hóa Việt Nam có mặt tại Mỹ, Trung Quốc và khắp thế giới
- Việt Nam là thành viên của WTO, CPTPP, EVFTA và nhiều hiệp định thương mại tự do khác

Đây chính là di sản của tầm nhìn đối ngoại giai đoạn 1991-1996.`,
    tags: ["FDI", "Hội nhập", "ASEAN"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
  },
];

export const vietnamAchievements = [
  {
    title: "Ra khỏi khủng hoảng",
    description: "Sau 10 năm Đổi Mới (1986-1996), Việt Nam đã vượt qua khủng hoảng kinh tế-xã hội nghiêm trọng",
    icon: Flag,
  },
  {
    title: "Nền tảng phát triển",
    description: "Chuẩn bị tiền đề cho công nghiệp hóa, hiện đại hóa đất nước trong các thập kỷ tiếp theo",
    icon: Building2,
  },
  {
    title: "Hội nhập quốc tế",
    description:
      "Phá vỡ thế bao vây cấm vận, gia nhập ASEAN, bình thường hóa với Mỹ và Trung Quốc",
    icon: Star,
  },
];

export default { impacts, vietnamAchievements };
