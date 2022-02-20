import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, checkHandler } = props;
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => checkHandler(todo.id)} />
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
};

export default TodoItem;
