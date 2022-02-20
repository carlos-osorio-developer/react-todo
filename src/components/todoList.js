import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
  const { todos, checkHandler } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkHandler={checkHandler} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  checkHandler: PropTypes.func.isRequired,
};

export default TodoList;
