import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { TIMER_STATUS } from "../script/constants"; // Or wherever your constants are
import { formatTime } from "../script/helpers";
import { useTimerSound } from "../hooks/useTimerSound";

function Timer() {
  const { timerStatus, timerValue, setInitialStatus } = useAppContext();
  const [secondsLeft, setSecondsLeft] = useState(timerValue);

  const isPlayingStatus = timerStatus === TIMER_STATUS.PLAYING;
  const isPausedStatus = timerStatus === TIMER_STATUS.PAUSED;
  const isStoppedStatus = timerStatus === TIMER_STATUS.STOPPED;
  const isRestartedStatus = timerStatus === TIMER_STATUS.RESTARTED;
  const isInitialStatus = timerStatus === TIMER_STATUS.INITIAL;

  const isPlaying = isPlayingStatus || isRestartedStatus;

  useTimerSound(isPlaying, isRestartedStatus, secondsLeft); 

  function resetTimerValue() {
    setSecondsLeft(timerValue);
  }

  function setTimerValue() {
    setSecondsLeft(timerValue);
  }

  useEffect(() => {
    let intervalId = null;

    const shouldStartTimer =
      (isPlayingStatus || isRestartedStatus) && secondsLeft > 0;
    const isTimerUp = secondsLeft === 0 && isPlayingStatus;

    if (shouldStartTimer) {
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (isStoppedStatus) {
      resetTimerValue();
    }

    if (isTimerUp) {
      setInitialStatus();
      resetTimerValue();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlayingStatus, isStoppedStatus, isRestartedStatus, secondsLeft]);

  useEffect(() => {
    if (isRestartedStatus) {
      resetTimerValue();
    }
  }, [isRestartedStatus]);

  useEffect(() => {
    setTimerValue();
  }, [timerValue]);

  const { minutes, seconds } = formatTime(secondsLeft);

  return (
    <h2 className="timer">
      <span className="timer__minutes">{minutes}</span>
      <span className="timer__colon">:</span>
      <span className="timer__seconds">{seconds}</span>
    </h2>
  );
}

export default Timer;
