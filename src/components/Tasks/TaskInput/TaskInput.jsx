/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const InputChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim() to avoid enterring just spaces.
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid ? "black" : "red" }}>What will you do today?</label>
        <input
          type="text"
          onChange={InputChangeHandler}
          value={enteredValue}
          style={{
            borderColor: isValid ? "#ccc" : "red",
            backgroundColor: isValid ? "transparent" : "salmon",
          }}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
