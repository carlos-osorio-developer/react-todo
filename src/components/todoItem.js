import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
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
};

export default TodoItem;
