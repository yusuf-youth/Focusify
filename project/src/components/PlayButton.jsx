import { useState } from "react";
import {
  PauseFill as PauseFillIcon,
  PlayFill as PlayFillIcon,
} from "../script/icons";
import { useAppContext } from "../context/AppContext";
import { TIMER_STATUS } from "../script/constants";

function PlayButton() {
  const { timerStatus, setPlayingStatus, setPausedStatus } = useAppContext();
  const isInitialStatus = timerStatus === TIMER_STATUS.INITIAL;
  const isStoppedStatus = timerStatus === TIMER_STATUS.STOPPED;
  const isPausedStatus = timerStatus === TIMER_STATUS.PAUSED;

  const isPlayButtonShown =
    isInitialStatus || isStoppedStatus || isPausedStatus;

  function onClickPlayButton() {
    setPlayingStatus();
  }

  function onClickPauseButton() {
    setPausedStatus();
  }

  if (!isPlayButtonShown) {
    return (
      <button
        className="toolbar__button"
        onClick={onClickPauseButton}
        aria-label="Pause timer"
        title="Pause timer"
      >
        <PauseFillIcon />
      </button>
    );
  }

  if (isPlayButtonShown) {
    return (
      <button
        className="toolbar__button"
        onClick={onClickPlayButton}
        aria-label="Play timer"
        title="Play timer"
      >
        <PlayFillIcon />
      </button>
    );
  }
}

export default PlayButton;
