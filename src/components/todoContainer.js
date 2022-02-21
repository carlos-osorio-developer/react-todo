import React from 'react';
import TodoList from './todoList';
import Header from './header';
import InputTodo from './inputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.onChangeEdit = this.onChangeEdit.bind(this);
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    console.log(loadedTodos);
    if (loadedTodos && loadedTodos.length) {
      this.setState({
        todos: loadedTodos,
      });
    } else {
      this.setState({
        todos:
        [{
          id: 1,
          title: 'Add your first todo',
          completed: false,
          editing: false,
        }],
      });
    }
  }

  componentDidUpdate(prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
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
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
      editing: false,
    };
    this.setState({ todos: [...todos, newTodo] });
  }

  editTodo = (id) => {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.editing = !todo.editing;
    this.setState({ todos });
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
