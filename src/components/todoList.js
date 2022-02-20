import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = { todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired };

export default TodoList;
