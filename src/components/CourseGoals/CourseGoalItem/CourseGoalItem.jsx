/* eslint-disable react/prop-types */
import './CourseGoalItem.css';

const CourseGoalItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;