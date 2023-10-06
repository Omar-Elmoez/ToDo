/* eslint-disable react/prop-types */
import Button from "../../UI/Button/Button";
import "./TaskItem.css";

const TaskItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={`task-item ${props.completed && 'complete'}`}>
      <input
        type="checkbox"
        name="completed-task"
        className={props.completed ? "checked" : ''}
        onClick={() => props.onCompleteTask(props.id)}
      />
      {props.children}
      <Button type={'button'} onClick={deleteHandler}>Delete</Button>
    </li>
  );
};

export default TaskItem;
