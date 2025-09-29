import { useMemo } from "react";

export default function useSound(src, { volume = 1.0 } = {}) {
  const audio = useMemo(() => {
    try {
      const el = new Audio(src);
      el.volume = volume;
      return el;
    } catch (e) {
      return null;
    }
  }, [src, volume]);

  const play = () => {
    try {
      if (!audio) return;
      audio.currentTime = 0; // restart so rapid clicks replay
      audio.play().catch(() => {});
    } catch {}
  };

  return play;
}
