import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
  const {
    todos, checkHandler, deleteHandler, editHandler,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  checkHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
};

export default TodoList;
