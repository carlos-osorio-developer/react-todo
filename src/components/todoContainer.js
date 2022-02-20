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
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default TodoContainer;
