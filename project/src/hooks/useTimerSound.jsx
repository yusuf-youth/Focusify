import React, { useEffect, useRef } from "react";

const SOUND_URL = "/beep.mp3";

export const useTimerSound = (isPlaying, isRestarted, secondsLeft) => {
  const audioRef = useRef(null);

  const [hasJustStarted, setHasJustStarted] = React.useState(false);
  const isTimerUp = secondsLeft === 0;

  useEffect(() => {
    const audio = new Audio(SOUND_URL);
    audio.preload = "auto";
    audioRef.current = audio;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playSound = () => {
      audio.pause();
      audio.currentTime = 0;
      audio
        .play()
        .catch((e) =>
          console.log("Audio play failed (user interaction required):", e)
        );
    };

    if ((isPlaying || isRestarted) && !hasJustStarted) {
      playSound();
      setHasJustStarted(true);
    } else if (!(isPlaying || isRestarted)) {
      setHasJustStarted(false);
    }

    if (isTimerUp) {
      playSound();
      setHasJustStarted(false);
    }
  }, [isPlaying, isRestarted, secondsLeft]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
};
