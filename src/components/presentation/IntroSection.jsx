import React, { useState, useCallback } from "react";
import { Play } from "lucide-react";
import { introDetails } from "../../data/intro-details";
import DetailModal from "../common/DetailModal";
import VideoModal from "../common/VideoModal";

const IntroSection = () => {
  const [active, setActive] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const scrollTo = useCallback((id) => {
    const el =
      document.getElementById(id) || document.getElementById("content-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const getYouTubeId = (url) => {
    if (!url) return null;
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
      if (u.searchParams.get("v")) return u.searchParams.get("v");
      return u.pathname.split("/").pop();
    } catch (e) {
      const m =
        url.match(/v=([a-zA-Z0-9_-]+)/) || url.match(/\/([a-zA-Z0-9_-]{6,})$/);
      return m ? m[1] : null;
    }
  };

  const openVideoFor = (url) => {
    const id = getYouTubeId(url);
    if (!id) {
      alert("Không tìm thấy video ID.");
      return;
    }
    setVideoId(id);
    setVideoOpen(true);
  };

  return (
    <section
      id="content-section"
      className="py-16 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Giới thiệu khái niệm
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khái quát ngắn gọn về hai khái niệm then chốt:{" "}
            <strong>Đại đoàn kết dân tộc</strong> và{" "}
            <strong>Đoàn kết quốc tế</strong>. Nhấn{" "}
            <span className="font-semibold">Tìm hiểu thêm</span> để đọc chi tiết
            hoặc xem video minh hoạ.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {introDetails.map((item) => {
            const fallbackVideo =
              item.id === "i1"
                ? "https://www.youtube.com/watch?v=AtbQeFo0c0U"
                : item.id === "i2"
                ? "https://www.youtube.com/watch?v=ccJ3m0Rsuqo"
                : null;

            const videoUrl = item.video || fallbackVideo;
            const videoThumbId = getYouTubeId(videoUrl);
            const thumbnail = videoThumbId
              ? `https://img.youtube.com/vi/${videoThumbId}/hqdefault.jpg`
              : null;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 p-8 border border-gray-100 flex flex-col justify-between"
                style={{ minHeight: 460 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-base flex-shrink-0 bg-gradient-to-br ${item.color}`}
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <div
                      className="text-gray-600 text-base leading-relaxed overflow-hidden"
                      style={{ minHeight: 72 }}
                    >
                      {item.summary}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  {thumbnail ? (
                    <button
                      onClick={() => openVideoFor(videoUrl)}
                      className="group relative block w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-200"
                      aria-label={`Xem video: ${item.title}`}
                      title={`Xem video: ${item.title}`}
                    >
                      <img
                        src={thumbnail}
                        alt={`Thumbnail video: ${item.title}`}
                        className="w-full h-44 object-cover transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="flex items-center gap-3 bg-black/40 px-3 py-2 rounded-full">
                          <Play className="w-5 h-5 text-white" />
                          <span className="text-white font-semibold">
                            Xem video
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 text-sm text-gray-500 text-center mt-2 mb-4">
                        Video tư liệu — {item.title}
                      </div>
                    </button>
                  ) : (
                    <div className="w-full max-w-xs md:max-w-sm h-44 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                      <div className="text-gray-400">Không có video</div>
                    </div>
                  )}
                </div>

                <div className="mt-6 mt-auto">
                  <div className="mt-6 flex items-center justify-center md:justify-between gap-4">
                    <button
                      onClick={() => setActive(item)}
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold shadow hover:brightness-95 transition w-full md:w-auto"
                      aria-label={`Tìm hiểu thêm về ${item.title}`}
                    >
                      Tìm hiểu thêm
                    </button>

                    <a
                      href={item.sources?.[0]?.url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-500 hover:underline hidden md:inline"
                    >
                      Nguồn
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        item={active}
      />
      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId={videoId}
        title="Video: Đại đoàn kết dân tộc"
      />
    </section>
  );
};

export default IntroSection;
