import React, { Component } from 'react';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { createTask, fetchTasksList, updateTask, deleteTask } from './TasksGateway.jsx';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList,
      }),
    );
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id, done) => {
    const updatedTask = { done: !done };
    console.log(updatedTask, id);
    updateTask(id, updatedTask).then(() => this.fetchList());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchList());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
