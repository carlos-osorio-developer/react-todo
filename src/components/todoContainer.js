import React, { useState, useEffect } from 'react';
import TodoList from './todoList';
import Header from './header';
import InputTodo from './inputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('todos'));
    if (temp !== null && temp.length > 0) {
      setTodos(temp);
    } else {
      setTodos([{
        id: 1,
        title: 'Add your first task',
        completed: false,
        editing: false,
      }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
