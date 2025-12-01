import { useAppContext } from "../context/AppContext";
import { TIMER_STATUS } from "../script/constants";
import { Restart as RestartIcon } from "../script/icons";

function RestartButton() {
  const { timerStatus, setRestartedStatus } = useAppContext();
  const isInitialStatus = timerStatus === TIMER_STATUS.INITIAL;
  const isStoppedStatus = timerStatus === TIMER_STATUS.STOPPED;

  function onClick() {
    setRestartedStatus();
  }

  return (
    <button
      className="toolbar__button"
      disabled={isInitialStatus || isStoppedStatus}
      onClick={onClick}
      aria-label="Restart timer" title="Restart timer"
    >
      <RestartIcon />
    </button>
  );
}

export default RestartButton;
