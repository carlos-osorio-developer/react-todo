import React from 'react';
import TodoList from './todoList';
import Header from './header';
import InputTodo from './inputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Learn React',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Redux',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn React-Redux',
          completed: false,
        },
      ],
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  checkboxHandler = (id) => {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  addTodo = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      title,
      completed: false,
    };
    this.setState({ todos: [...todos, newTodo] });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <TodoList
            todos={todos}
            checkHandler={this.checkboxHandler}
            deleteHandler={this.deleteTodo}
          />
          <InputTodo addHandler={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
