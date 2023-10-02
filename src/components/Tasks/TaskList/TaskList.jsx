/* eslint-disable react/prop-types */

import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          onDelete={props.onDeleteItem}
          onCompleteTask={props.onCompleteTask}
        >
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
