import { useAppContext } from "../context/AppContext";
import { Add as AddIcon } from "../script/icons";

function AddButton() {
  const {
    toggleGoalInput,
    isGoalInputActive,
    isTimerControlActive,
    toggleTimerControl,
  } = useAppContext();

  function onClick() {
    if (isTimerControlActive) {
      toggleTimerControl();
    }

    toggleGoalInput();
  }

  return (
    <button
      className={`toolbar__button toolbar__button--add ${
        isGoalInputActive ? "is-active" : ""
      }`}
      onClick={onClick}
      aria-label={`${isGoalInputActive ? "Close field" : "Add subject"}`}
      title={`${isGoalInputActive ? "Close field" : "Add subject"}`}
    >
      <AddIcon />
    </button>
  );
}

export default AddButton;
