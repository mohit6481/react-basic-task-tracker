import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!text || !day) {
      alert("Please enter correct data");
      return;
    }
    onAdd({
      text,
      day,
      reminder,
    });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Day and Time"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
