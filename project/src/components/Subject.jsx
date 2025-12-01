import { useAppContext } from "../context/AppContext";
import { EmptyCircle as EmptyCircleIcon } from "../script/icons";

function Subject({ id, label }) {
  const { deleteSubject } = useAppContext();

  function onClick() {
    deleteSubject(id);
  }

  return (
    <div className="subject">
      <button className="subject__button" onClick={onClick}>
        <EmptyCircleIcon />
      </button>
      <label className="subject__label">{label}</label>
    </div>
  );
}

export default Subject;
