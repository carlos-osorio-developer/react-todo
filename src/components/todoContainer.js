import React from 'react';
import TodoList from './todoList';
import Header from './header';
import InputTodo from './inputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    const initialTodo = {
      id: 1,
      title: 'Add your first todo',
      completed: false,
      editing: false,
    };

    const storageTodos = localStorage.getItem('todos');
    const checker = storageTodos === null || storageTodos === '[]';

    this.state = {
      todos: checker ? [initialTodo] : JSON.parse(storageTodos),
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.onChangeEdit = this.onChangeEdit.bind(this);
  }

  checkboxHandler = (id) => {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  addTodo = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      title,
      completed: false,
      editing: false,
    };
    this.setState({ todos: [...todos, newTodo] });
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  }

  editTodo = (id) => {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.editing = !todo.editing;
    this.setState({ todos });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  onChangeEdit = (id, newTitle) => {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.title = newTitle;
    this.setState({ todos });
  };

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
            editHandler={this.editTodo}
            onChangeHandler={this.onChangeEdit}
          />
          <InputTodo addHandler={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
