import PlayButton from "./PlayButton";
import StopButton from "./StopButton";
import RestartButton from "./RestartButton";
import AddButton from "./AddButton";
import ModifyButton from "./ModifyButton";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { TIMER_STATUS } from "../script/constants";

function Toolbar() {
  const { timerStatus } = useAppContext();
  const isPlayingStatus = timerStatus === TIMER_STATUS.PLAYING;

  return (
    <div className={`toolbar ${isPlayingStatus ? "fade" : ""}`}>
      <PlayButton />
      <StopButton />
      <RestartButton />
      <AddButton />
      <ModifyButton />
    </div>
  );
}

export default Toolbar;
