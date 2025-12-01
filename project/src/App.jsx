import { Fragment, useEffect } from "react";
import Container from "./components/Container";
import Divider from "./components/Divider";
import Subject from "./components/Subject";
import List from "./components/List";
import Timer from "./components/Timer";
import Toolbar from "./components/Toolbar";
import { useAppContext } from "./context/AppContext";
import { TIMER_STATUS } from "./script/constants";
import GoalInput from "./components/GoalInput";
import TimerControl from "./components/TimerControl";

function App() {
  const { subjects, timerStatus, setInitialStatus, setPlayingStatus } =
    useAppContext();
  const isStoppedStatus = timerStatus === TIMER_STATUS.STOPPED;
  const isRestartedStatus = timerStatus === TIMER_STATUS.RESTARTED;

  useEffect(() => {
    if (isStoppedStatus) {
      setInitialStatus();
    }

    if (isRestartedStatus) {
      setPlayingStatus();
    }
  }, [timerStatus]);

  function renderSubjects() {
    return subjects.map((goal, index, array) => (
      <Fragment key={goal.id}>
        <li className="list_item">
          <Subject id={goal.id} label={goal.label} />
        </li>

        {index !== array.length - 1 && <Divider isShort />}
      </Fragment>
    ));
  }

  return (
    <div className="App">
      <h1 className="visually-hidden">Focusify</h1>
      <div className="interactive-area">
        <GoalInput />
        <TimerControl />
      </div>
      <Toolbar />
      <Container>
        <Timer />
        <Divider />
        <List>{renderSubjects()}</List>
      </Container>
    </div>
  );
}

export default App;
