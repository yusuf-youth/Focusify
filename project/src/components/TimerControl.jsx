import { useAppContext } from "../context/AppContext";
import { Minus, Plus } from "../script/icons";

function TimerControl() {
  const {
    isTimerControlActive,
    increaseTimerValueByOne,
    descreaseTimerValueByOne,
  } = useAppContext();

  function onClickPlusButton() {
    increaseTimerValueByOne();
  }

  function onClickMinusButton() {
    descreaseTimerValueByOne();
  }

  return (
    <div
      className={`timer-control ${isTimerControlActive ? "is-active" : ""} `}
    >
      <button
        className="timer-control__button"
        aria-label="Increase by 1 minute"
        title="Increase by 1 minute"
        onClick={onClickPlusButton}
      >
        <Plus />
      </button>
      <button
        className="timer-control__button"
        aria-label="Decrease by 1 minute"
        title="Decrease by 1 minute"
        onClick={onClickMinusButton}
      >
        <Minus />
      </button>
    </div>
  );
}

export default TimerControl;
