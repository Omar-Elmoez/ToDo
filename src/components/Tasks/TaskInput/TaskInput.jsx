/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./TaskInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.isValid ? "black" : "red"  }
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({isValid}) => isValid ? "#ccc" : "red"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${({isValid}) => isValid ? "transparent" : "samon"}
  }

  & input:focus {
    outline: none;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const InputChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
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
      <FormControl isValid={isValid}>
        <label>
          What will you do today?
        </label>
        <input
          type="text"
          onChange={InputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default CourseInput;
