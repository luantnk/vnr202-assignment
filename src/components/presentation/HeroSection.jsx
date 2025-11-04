import { ChevronDown, Cog, Flame, ExternalLink } from "lucide-react";
import TextReveal from "../common/TextReveal";
import HoverShadowButton from "../nurui/shadow-button";
import qrEbook from "../../assets/qr.png";

const HeroSection = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Soft teal / cyan gradient (gentle & modern)
    <section
      className="relative min-h-screen bg-gradient-to-br from-teal-700 via-cyan-600 to-cyan-400 overflow-hidden"
      aria-label="Hero - Đổi Mới 1986"
    >
      {/* Background glass & patterns (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 glass opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            mixBlendMode: "overlay",
            opacity: 0.06,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.04) 12px, rgba(255,255,255,0.04) 24px)",
            mixBlendMode: "overlay",
            opacity: 0.03,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Floating icons - lower contrast, teal accents */}
      <div
        className="absolute top-16 left-6 opacity-24 motion-safe:animate-[spin_18s_linear_infinite] hidden sm:block"
        aria-hidden="true"
      >
        <Cog className="w-14 h-14 text-teal-200" />
      </div>

      <div
        className="absolute top-36 right-12 opacity-22 hidden md:block"
        aria-hidden="true"
      >
        <Flame className="w-10 h-10 text-cyan-100 animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-sky-50 mb-5 md:mb-8 leading-tight">
            <div data-aos="zoom-out-up">
              <span className="block mb-1 md:mb-2 text-lg sm:text-xl md:text-2xl font-semibold">
                Công cuộc
              </span>
            </div>

            <div data-aos="zoom-out-up" className="mt-1">
              {/* softer clipped text gradient */}
              <span className="block bg-gradient-to-r from-cyan-100 via-teal-100 to-emerald-100 bg-clip-text text-transparent">
                Đổi Mới 1986 - 1996
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <div className="mx-auto max-w-3xl">
            <TextReveal
              className="text-sky-50/95"
              text="Đưa đất nước vượt qua khủng hoảng, bước vào thời kỳ công nghiệp hóa, hiện đại hóa"
            />
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center mb-6 mt-6">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-100 to-transparent w-32" />
            <Flame className="mx-3 w-5 h-5 text-cyan-100" />
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-100 to-transparent w-32" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <HoverShadowButton
              text={"Khám phá ngay"}
              onClick={scrollToContent}
              className="!bg-gradient-to-r !from-cyan-400 !to-teal-600 !text-white !shadow-lg"
            />
            <a
              href="https://heyzine.com/flip-book/4825bc2069.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-sm text-sky-50 hover:bg-white/6 transition focus:outline-none focus:ring-4 focus:ring-cyan-200"
            >
              <ExternalLink className="w-4 h-4" />
              Tải eBook
            </a>
          </div>

          {/* Glass card */}
          <div className="relative mx-auto max-w-lg">
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-300 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-7 h-7 text-sky-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-sm md:text-base font-semibold text-sky-50">
                    Biểu tượng của sức mạnh
                  </h3>
                  <p className="text-sky-50/90 text-xs md:text-sm mt-1 max-w-xl">
                    Biểu tượng của sức mạnh và ý chí cách mạng — tôn vinh tinh
                    thần đoàn kết, đổi mới và sáng tạo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR floating card (clickable) */}
      <aside
        className="fixed right-6 bottom-6 z-40 w-40 md:w-44 bg-white/6 backdrop-blur-md glass rounded-xl p-3 md:p-4 border border-white/8 shadow-lg hover:translate-y-0 hover:scale-[1.02] transition transform motion-safe:transition-all"
        role="region"
        aria-label="Mã QR tải ebook"
      >
        <a
          href={qrEbook}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2"
        >
          <img
            src={qrEbook}
            alt="Mã QR tải ebook"
            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md shadow-sm"
            loading="lazy"
            aria-hidden="false"
          />
          <div className="text-center">
            <p className="text-xs md:text-sm text-sky-50 font-medium">
              Scan để tải eBook
            </p>
            <p className="text-[10px] md:text-xs text-sky-200/80">
              Hoặc chạm để mở
            </p>
          </div>
        </a>
      </aside>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToContent}
          aria-label="Cuộn xuống nội dung"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/8 focus:outline-none focus:ring-4 focus:ring-cyan-200 transition"
        >
          <ChevronDown className="w-5 h-5 text-sky-50 opacity-90 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
