import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";

function GoalInput() {
  const { isGoalInputActive, addSubject } = useAppContext();
  const inputElement = useRef();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (isGoalInputActive) {
      inputElement.current.focus();
    }
  }, [isGoalInputActive]);

  function onSubmit(e) {
    e.preventDefault();

    if (inputText !== "") {
      addSubject(inputText);
    }

    clearInputText();
  }

  function onChange(e) {
    const inputValue = e.target.value;
    setInputText(inputValue);
  }

  function clearInputText() {
    setInputText("");
  }

  return (
    <form
      className={`form ${isGoalInputActive ? "is-active" : ""}`}
      onSubmit={onSubmit}
    >
      <label className="form__label visually-hidden" htmlFor="addSubject">
        Add Subject
      </label>
      <input
        ref={inputElement}
        value={inputText}
        onChange={onChange}
        className="form__input"
        type="text"
        id="addSubject"
        name="goal-input"
        placeholder="New subject"
      />
    </form>
  );
}

export default GoalInput;
