import React from 'react';
import PropTypes from 'prop-types';
import styles from './todoItem.module.css';

const TodoItem = (props) => {
  const {
    todo,
    checkHandler,
    deleteHandler,
    editHandler,
  } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const todoStyle = todo.editing ? { display: 'none' } : { display: 'block' };
  const editStyle = todo.editing ? { display: 'block' } : { display: 'none' };

  return (
    <li className={styles.item}>
      <div style={todoStyle} onDoubleClick={() => editHandler(todo.id)}>
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
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input type="text" className={styles.editInput} style={editStyle} />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
  }).isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
};

export default TodoItem;
