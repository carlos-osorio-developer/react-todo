import React, { useState } from 'react';
import TodoList from './todoList';
import Header from './header';
import InputTodo from './inputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const checkboxHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title,
        completed: false,
        editing: false,
      },
    ]);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            editing: !todo.editing,
          };
        }
        return todo;
      }),
    );
  };

  const onChangeEdit = (id, newTitle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <TodoList
          todos={todos}
          checkHandler={checkboxHandler}
          deleteHandler={deleteTodo}
          editHandler={editTodo}
          onChangeHandler={onChangeEdit}
        />
        <InputTodo addHandler={addTodo} />
      </div>
    </div>
  );
};

export default TodoContainer;
