// src/components/common/VideoModal.jsx
import React, { useEffect } from "react";

const VideoModal = ({ open, onClose, videoId, title = "Video" }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !videoId) return null;

  // youtube-nocookie embed + modest params
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&iv_load_policy=3`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-3xl bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />
        </div>

        <div className="mt-3 flex justify-between items-center">
          <div className="text-sm text-white/90">© Nguồn: YouTube</div>
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-md bg-white text-gray-800 hover:bg-gray-100"
            aria-label="Đóng video"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
