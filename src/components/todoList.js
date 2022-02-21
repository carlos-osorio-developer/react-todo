import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = (props) => {
  const {
    todos,
    checkHandler,
    deleteHandler,
    editHandler,
    onChangeHandler,
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
          onChangeHandler={onChangeHandler}
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
  onChangeHandler: PropTypes.func.isRequired,
};

export default TodoList;
