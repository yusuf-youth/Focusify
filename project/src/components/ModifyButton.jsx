import { useAppContext } from "../context/AppContext";
import { PlusMinus as PlusMinusIcon } from "../script/icons";

function ModifyButton() {
  const {
    isTimerControlActive,
    toggleTimerControl,
    isGoalInputActive,
    toggleGoalInput,
  } = useAppContext();

  function onClick() {
    if (isGoalInputActive) {
      toggleGoalInput();
    }

    toggleTimerControl();
  }

  return (
    <button
      className={`toolbar__button toolbar__button--modify ${
        isTimerControlActive ? "is-active" : ""
      }`}
      onClick={onClick}
      aria-label="Increase/decrease timer"
      title="Increase/decrease timer"
    >
      <PlusMinusIcon />
    </button>
  );
}

export default ModifyButton;
