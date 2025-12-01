import { createContext, useContext, useEffect, useState } from "react";
import {
  generateSimpleId,
  loadInitialSubjects,
  loadInitialTimer,
  saveSubjects,
  saveTimerValue,
} from "../script/helpers";
import { TIMER_STATUS } from "../script/constants";

export const initialSubjects = [
  { id: 0, label: "Coding" },
  { id: 1, label: "Reading" },
];

export const INITIAL_TIME_SECONDS = 1 * 60;

const AppContext = createContext({
  subjects: null,
  timerStatus: null,
  timerValue: null,
  isGoalInputActive: null,
  isTimerControlActive: null,
  addSubject: (label) => null,
  deleteSubject: (id) => null,
  setInitialStatus: () => null,
  setPlayingStatus: () => null,
  setPausedStatus: () => null,
  setStoppedStatus: () => null,
  setRestartedStatus: () => null,
  increaseTimerValueByOne: () => null,
  descreaseTimerValueByOne: () => null,
  toggleGoalInput: () => null,
  toggleTimerControl: () => null,
});

export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const [subjects, setSubjects] = useState(loadInitialSubjects());
  const [timerStatus, setTimerStatus] = useState(TIMER_STATUS.INITIAL);
  const [timerValue, setTimerValue] = useState(loadInitialTimer());
  const [isGoalInputActive, setGoalInputActive] = useState(false);
  const [isTimerControlActive, setTimerControlActive] = useState(false);

  function addSubject(label) {
    const id = generateSimpleId();

    setSubjects((state) => [...state, { id, label }]);
  }

  function deleteSubject(id) {
    setSubjects((state) => state.filter((goal) => goal.id !== id));
  }

  function setInitialStatus() {
    setTimerStatus(TIMER_STATUS.INITIAL);
  }

  function setPlayingStatus() {
    setTimerStatus(TIMER_STATUS.PLAYING);
  }

  function setPausedStatus() {
    setTimerStatus(TIMER_STATUS.PAUSED);
  }

  function setStoppedStatus() {
    setTimerStatus(TIMER_STATUS.STOPPED);
  }

  function setRestartedStatus() {
    setTimerStatus(TIMER_STATUS.RESTARTED);
  }

  function increaseTimerValueByOne() {
    setTimerValue((value) => (value += 60));
  }

  function descreaseTimerValueByOne() {
    setTimerValue((value) => (value === 60 ? 60 : (value -= 60)));
  }

  function toggleGoalInput() {
    setGoalInputActive((value) => !value);
  }

  function toggleTimerControl() {
    setTimerControlActive((value) => !value);
  }

  useEffect(() => {
    saveSubjects(subjects);
  }, [subjects]);

  useEffect(() => {
    saveTimerValue(timerValue);
  }, [timerValue]);

  return (
    <AppContext.Provider
      value={{
        subjects,
        timerStatus,
        timerValue,
        isGoalInputActive,
        isTimerControlActive,
        addSubject,
        deleteSubject,
        setInitialStatus,
        setPlayingStatus,
        setPausedStatus,
        setStoppedStatus,
        setRestartedStatus,
        increaseTimerValueByOne,
        descreaseTimerValueByOne,
        toggleGoalInput,
        toggleTimerControl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
