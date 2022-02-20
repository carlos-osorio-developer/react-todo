import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = { todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired };

export default TodoList;
