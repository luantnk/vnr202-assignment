import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { toggleMusic, subscribe, isPlaying } from "../../services/musicService";

const MusicButton = () => {
  const [isPlayingState, setIsPlayingState] = useState(isPlaying());

  useEffect(() => {
    const unsub = subscribe((playing) => setIsPlayingState(!!playing));
    return () => unsub();
  }, []);

  const handleToggle = async () => {
    await toggleMusic();
    // subscribe will update state; fallback in case subscribe misfires:
    setIsPlayingState(isPlaying());
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={handleToggle}
        aria-label={isPlayingState ? "Tắt nhạc" : "Bật nhạc"}
        className={`
          w-16 h-16 rounded-lg border-2 border-gray-500 cursor-pointer
          flex items-center justify-center shadow-lg hover:shadow-xl
          transition-all duration-300 ease-in-out hover:bg-amber-400
          ${isPlayingState ? "bg-black" : "bg-white/10"} text-white
          md:w-10 md:h-10
        `}
      >
        {isPlayingState ? (
          <Volume2 className="text-gray-400" />
        ) : (
          <VolumeX className="text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default MusicButton;
