# 🌺 HCM Assignment – Trang học tương tác Tư tưởng Hồ Chí Minh

---

## 🚀 Project Setup & Usage

### 1️⃣ Cách cài và chạy dự án (dành cho người dùng muốn thử chạy local)

**Bước 1.** Clone repo về máy:
- `git clone https://github.com/gitdev-mdat/HCM_Assignment.git`
- `cd HCM_Assignment`

**Bước 2.** Cài đặt thư viện:
- `npm install`
  hoặc  
- `yarn`

**Bước 3.** Chạy trang web ở chế độ phát triển:
- `npm run dev`

Trang sẽ tự mở ở **http://localhost:5173**  
*(hoặc terminal sẽ báo port khác nếu bị trùng)*

**(Tùy chọn)** Build để deploy:
- `npm run build`

---

## 🔗 Deployed Web URL  
<!-- ✍️ [https://hcm-assignment.vercel.app/](https://hcm-assignment.vercel.app/) -->

---

## 💻 Project Introduction

### a. Tổng quan
Đây là **trang web học tập tương tác** trình bày chủ đề:  
**“Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc và Đoàn kết quốc tế”**  

🎯 **Mục tiêu:**  
Giúp người học:
- Đọc nội dung và xem video minh họa  
- Xem chi tiết từng phần lý thuyết  
- Làm bài Quiz kiểm tra kiến thức  
- Hỏi trợ lý AI để được giải đáp nhanh  

---

### b. Các chức năng chính (giải thích dễ hiểu)

#### 🏠 Trang chính (Hero)
- Nút **"Khám phá ngay"**: cuộn xuống phần nội dung học  
- **QR Card**: quét để tải eBook tham khảo  

#### 💡 Intro (Giới thiệu khái niệm)
- Mỗi **thẻ (card)** có tiêu đề, tóm tắt, thumbnail video  
- **Nút “Xem video”**: mở video YouTube trong popup  
- **Nút “Tìm hiểu thêm”**: mở cửa sổ chi tiết với nội dung, ví dụ, nguồn, và tùy chọn **tải file .txt**  

#### 📘 Phần What / How / Why / Impact
- Các card trình bày từng khía cạnh (Cái gì – Làm thế nào – Tại sao – Tác động)  
- Có tag (nhãn) và nút **“Xem chi tiết”** để mở nội dung đầy đủ  
- **Nút Nguồn**: mở tài liệu gốc (nếu có) trong tab mới  

#### 📜 Detail Modal (Chi tiết nội dung)
- Hiển thị toàn bộ nội dung và phân đoạn rõ ràng  
- Có nút **Tải về (.txt)** để đọc offline  
- Có thể **đóng bằng phím Esc** hoặc click ngoài modal  

#### 🎥 Video Modal
- Mở video YouTube trực tiếp trong trang (không chuyển tab)  

#### 🧠 Quiz (Bài kiểm tra)
- **40 câu hỏi**, thời gian **20 phút**  
- Giao diện rõ ràng: bắt đầu, hủy, qua lại câu trước/sau  
- Sau khi nộp: hiển thị **điểm và đáp án đúng/sai chi tiết**  
- Nếu đóng giữa chừng → cảnh báo mất tiến trình  

#### 💬 Floating Chat (Trợ lý AI)
- Nút tròn ở góc dưới màn hình → click để mở chat  
- Gõ câu hỏi (tiếng Việt), AI sẽ trả lời tức thì  


#### 📚 Tải eBook
- Có nút hoặc QR ở phần **Hero** và **Footer** để tải file PDF  

#### 🔖 Copy Tag (nếu bật)
- Click vào tag để copy nội dung → hiện thông báo “Copied!”  

---

## ✨ Điểm đặc biệt (Unique Features)

✅ Tích hợp **Chat AI (Gemini)** – hỏi/đáp nhanh bằng tiếng Việt  
✅ Modal chi tiết có **xuất file .txt** đọc offline  
✅ **Quiz 40 câu** có đồng hồ và đáp án chi tiết  
✅ Không cần backend (FE-first), dữ liệu tĩnh, dễ deploy  
✅ Giao diện trực quan, thân thiện cho người học  

---

## 🧩 Công nghệ sử dụng

| Thành phần | Công nghệ |
|-------------|------------|
| **Frontend** | React (JSX), Tailwind CSS |
| **Icons** | lucide-react |
| **Video** | YouTube embed (trong modal) |
| **Lưu tạm** | localStorage |
| **AI** | Google Gemini API (Generative Language) |

---

## 🏗️ Kiến trúc & triển khai

Bản nộp hiện tại là **frontend-only** (không có backend).  
Nếu mở rộng:
- Có thể thêm **serverless proxy** (Vercel) để gọi Gemini an toàn  
- Hoặc tích hợp **Firestore / PostgreSQL** để lưu quiz và tiến trình học  

---

## 🧠 Reflection – Hướng phát triển trong tương lai

### a. Mở rộng chức năng
- Đồng bộ lịch học & nhắc nhở (Google Calendar, Push Notification)  
- Tài khoản người dùng, lưu tiến trình học  
- Thêm hình minh họa, gallery, infographic  
- Nâng cấp trải nghiệm mobile & hỗ trợ người khiếm thị  

### b. Nâng cấp AI
- Gọi Gemini qua server proxy để ẩn API key  
- Áp dụng JSON schema để hạn chế “hallucination”  
- Tự động hiển thị nguồn trích dẫn hoặc độ tin cậy câu trả lời  

---

## ✅ Checklist – Dành cho người kiểm thử / chấm bài

| Mục | Trạng thái |
|------|-------------|
| Code chạy không lỗi (`npm run dev`) | ✅ |
| Các chức năng chính hoạt động | ✅ |
| Xem nội dung / Xem chi tiết / Mở video | ✅ |
| Quiz: bắt đầu – nộp – xem kết quả | ✅ |
| Chat AI hoạt động (nếu bật Gemini) | ✅ |
| README & hướng dẫn hoàn chỉnh | ✅ |
| Cảnh báo về API key client-side | ✅ |

---

## ❓ Hướng dẫn nhanh cho người không chuyên (FAQ)

🖥️ **Muốn xem video:**  
→ Vào phần “Giới thiệu”, nhấn **Xem video** trên thẻ tương ứng  

📖 **Muốn đọc chi tiết:**  
→ Nhấn **Tìm hiểu thêm / Xem chi tiết** → mở cửa sổ chi tiết  
→ Có thể nhấn **Tải về** để lưu file  

🧩 **Muốn làm Quiz:**  
→ Mở mục **Quiz**, nhấn **Bắt đầu quiz**, làm từng câu  
→ Sau khi nộp sẽ hiển thị điểm & đáp án đúng  

🤖 **Muốn hỏi AI:**  
→ Bấm nút chat (góc dưới màn hình), nhập câu hỏi, gửi  
→ Nếu không phản hồi, thử hỏi ngắn hơn  

📕 **Tải eBook:**  
→ Quét QR hoặc nhấn link tải file PDF ở Hero/Footer  (https://heyzine.com/flip-book/4825bc2069.html)

---

📩 *Liên hệ hỗ trợ (nếu cần):*  
👉 **Email:** [luantnkse184059@fpt.edu.vn]
