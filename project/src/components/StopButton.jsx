import { useAppContext } from "../context/AppContext";
import { TIMER_STATUS } from "../script/constants";
import { StopFill as StopFillIcon } from "../script/icons";

function StopButton() {
  const { timerStatus, setStoppedStatus } = useAppContext();
  const isInitialStatus = timerStatus === TIMER_STATUS.INITIAL
  const isStoppedStatus = timerStatus === TIMER_STATUS.STOPPED

  function onClick() {
    setStoppedStatus();
  }

  return (
    <button
      className="toolbar__button"
      disabled={isInitialStatus || isStoppedStatus}
      onClick={onClick}
      aria-label="Stop timer" title="Stop timer"
    >
      <StopFillIcon />
    </button>
  );
}

export default StopButton;
