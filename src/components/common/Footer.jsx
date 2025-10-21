// src/components/common/Footer.jsx
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Book,
  Users,
  Copyright,
  ExternalLink,
  Star,
} from "lucide-react";
import qrEbook from "../../assets/qr.png";

const Footer = () => {
  const references = [
    {
      title: "Giáo trình tư tuởng Hồ Chí Minh",
      author: "thuviensach.vn",
      year: "2025",
      type: "Giáo trình",
      link: "https://dilib.vn/pdf/viewer.php?id=ead4ec",
    },
  ];

  const teamMembers = [
    {
      name: "Member Name",
      role: "",
      id: "Member Id",
    },
    { name: "Member Name", role: "Làm Quiz", id: "Member Id" },
    {
      name: "Member Name",
      role: "Nghiên cứu nội dung - Tìm tài liệu",
      id: "Member Id",
    },
    {
      name: "Member Name",
      role: "Nghiên cứu nội dung và làm Ebook",
      id: "Member Id",
    },
    {
      name: "Member Name",
      role: "Nghiên cứu nội dung - Tìm tài liệu",
      id: "Member Id",
    },
    {
      name: "Member Name",
      role: "Nghiên cứu nội dung - Tìm tài liệu",
      id: "SE150884",
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-cyan-400" />
              Thông tin liên hệ
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Trường Đại học FPT</p>
                  <p className="text-slate-300 text-sm">
                    7 Đ. D1, Long Thạnh Mỹ, Thủ Đức, Hồ Chí Minh
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="mailto:luantnkse184059@fpt.edu.vn"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition text-sm"
                  aria-label="Gửi email"
                >
                  <Mail className="w-4 h-4 text-cyan-300" />
                  <span>luantnkse184059@fpt.edu.vn</span>
                </a>
              </div>

              {/* QR block: visible, responsive, clickable */}
              <div className="mt-4">
                <a
                  href={qrEbook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 bg-slate-800 p-3 rounded-lg hover:scale-[1.02] transition-transform duration-150"
                  aria-label="Mở QR eBook"
                >
                  <img
                    src={qrEbook}
                    alt="QR Ebook - Scan để tải ebook"
                    className="w-20 h-20 object-cover rounded-md shadow-md flex-shrink-0"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-sm text-slate-100">
                      Scan để tải eBook
                    </p>
                    <p className="text-xs text-slate-400">
                      Ebook: "Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc"
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Mở ảnh → tải về
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* References */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Book className="w-6 h-6 text-sky-400" />
              Nguồn tài liệu tham khảo
            </h3>

            <div className="space-y-4">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4
                      className="font-semibold text-sky-200 text-sm leading-tight cursor-pointer"
                      onClick={() => window.open(ref.link, "_blank")}
                      role="link"
                    >
                      {ref.title}
                    </h4>
                    <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded ml-2 flex-shrink-0">
                      {ref.type}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm">{ref.author}</p>
                  <p className="text-slate-400 text-xs">
                    Năm xuất bản: {ref.year}
                  </p>
                  <div className="mt-2">
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-cyan-200 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Mở nguồn tham khảo
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-sky-900/10 rounded-lg border border-sky-700/20">
              <div className="flex items-center gap-2 text-sky-200 text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>
                  Tài liệu được tham khảo từ các nguồn chính thức và uy tín
                </span>
              </div>
            </div>
          </div>

          {/* Team Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-emerald-300" />
              Nhóm thực hiện
            </h3>

            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-200">
                        {member.name}
                      </h4>
                      <p className="text-slate-300 text-sm">{member.role}</p>
                      <p className="text-slate-400 text-xs">
                        MSSV: {member.id}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div className="mt-6 p-4 bg-emerald-900/6 rounded-lg border border-emerald-700/10">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-amber-400" />
                <h4 className="font-semibold text-emerald-200">
                  Sản phẩm sáng tạo
                </h4>
              </div>
              <p className="text-emerald-100 text-sm">
                Bài thuyết trình: "Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc"
              </p>
              <p className="text-emerald-200 text-xs mt-1">Học kỳ Fall 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400">
              <Copyright className="w-4 h-4" />
              <span className="text-sm">
                Được thực hiện cho mục đích học tập.
              </span>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Môn: HCM</span>
              <span>•</span>
              <span>FPT University</span>
              <span>•</span>
              <span>Fall 2025</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-center text-xs text-slate-500">
              Đây là sản phẩm học tập của sinh viên. Mọi nội dung được tham khảo
              từ các nguồn tài liệu chính thức và được trình bày với mục đích
              giáo dục.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
