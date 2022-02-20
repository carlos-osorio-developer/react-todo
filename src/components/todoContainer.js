import React from 'react';
import TodoList from './todoList';
import Header from './header';

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

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodoList
          todos={todos}
          checkHandler={this.checkboxHandler}
          deleteHandler={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
