/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import TaskList from "./components/Tasks/TaskList/TaskList";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasksNumber, setCompletedTasksNumber] = useState(0)
  const addTaskHandler = (enteredText) => {
    setTasks((prevTasks) => {
      return [
        { text: enteredText, id: Math.random().toString(), completed: false },
        ...prevTasks
      ];
    });
  };

  const completeTaskHandler = (taskId) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        return task.id === taskId
          ? { ...task, completed: !task.completed }
          : task;
      });
    }
    );
    setCompletedTasksNumber(lastValue => lastValue + 1);
  };

  const deleteItemHandler = (clickedId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== clickedId);
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No tasks found. Maybe add one?</p>
  );

  if (tasks.length > 0) {
    content = (
      <TaskList
        items={tasks}
        onDeleteItem={deleteItemHandler}
        onCompleteTask={completeTaskHandler}
      />
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setTasks(prevState => {
        return [...prevState].sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1)
      })
    }, 200);
  }, [completedTasksNumber])

  return (
    <div>
      <section id="tasks-form">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section className="tasks">{content}</section>
    </div>
  );
};

export default App;
