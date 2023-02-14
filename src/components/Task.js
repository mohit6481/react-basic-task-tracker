import { FaTimes } from "react-icons/fa";

const Task = ({ id, text, day, onDelete, onToggle, reminder }) => {
  return (
    <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => {onToggle(id)}}>
      <h3>
        {text} <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => {onDelete(id)}}/>
      </h3>
      <h3>{day}</h3>
    </div>
  );
};

export default Task;
