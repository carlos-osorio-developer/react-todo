import React from 'react';
import PropTypes from 'prop-types';
import styles from './todoItem.module.css';

const TodoItem = (props) => {
  const { todo, checkHandler, deleteHandler } = props;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => checkHandler(todo.id)}
      />
      <input
        type="submit"
        className={styles.submit}
        value="Delete"
        onClick={() => deleteHandler(todo.id)}
      />
      <span>{todo.title}</span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default TodoItem;
