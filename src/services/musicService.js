import music from "../assets/pm.mp3";

const audio = new Audio(music);
audio.loop = true;
audio.preload = "auto";
audio.volume = 0.3;

// play returns boolean: true khi succeed, false khi bị chặn
export async function playMusic() {
  try {
    await audio.play();
    return true;
  } catch (err) {
    console.warn("play blocked:", err);
    return false;
  }
}

export function pauseMusic() {
  audio.pause();
}

// toggle returns true if music started playing, false if paused or blocked
export async function toggleMusic() {
  if (audio.paused) {
    return await playMusic();
  } else {
    pauseMusic();
    return false;
  }
}

export function isPlaying() {
  return !audio.paused;
}

export function subscribe(cb) {
  const handler = () => cb(!audio.paused);
  audio.addEventListener("play", handler);
  audio.addEventListener("pause", handler);
  audio.addEventListener("ended", handler);
  // initial sync
  cb(!audio.paused);
  return () => {
    audio.removeEventListener("play", handler);
    audio.removeEventListener("pause", handler);
    audio.removeEventListener("ended", handler);
  };
}
