import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './todoItem.module.css';

const TodoItem = (props) => {
  const {
    todo,
    checkHandler,
    deleteHandler,
    editHandler,
    onChangeHandler,
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
        <button
          type="submit"
          className={styles.submit}
          value="Delete"
          onClick={() => deleteHandler(todo.id)}
        >
          <FaTrash />
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        className={styles.editInput}
        style={editStyle}
        value={todo.title}
        onChange={(e) => onChangeHandler(todo.id, e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            editHandler(todo.id);
          }
        }}
      />
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
  onChangeHandler: PropTypes.func.isRequired,
};

export default TodoItem;
