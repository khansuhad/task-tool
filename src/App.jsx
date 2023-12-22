// App.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css'; // Import your CSS file

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task}
        </div>
      )}
    </Draggable>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState({
    todo: ['Task 1', 'Task 2', 'Task 3'],
    ongoing: [],
    completed: [],
  });
  const [newTask, setNewTask] = useState('');

  const redirectToLogin = () => {
    setIsLoggedIn(false);
  };

  const showTaskDashboard = () => {
    setIsLoggedIn(true);
  };

  const allowDrop = (result) => {
    return result.destination
      ? result.source.droppableId === result.destination.droppableId
      : false;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list

    const updatedTasks = { ...tasks };
    const [movedTask] = updatedTasks[result.source.droppableId].splice(
      result.source.index,
      1
    );
    updatedTasks[result.destination.droppableId].splice(
      result.destination.index,
      0,
      movedTask
    );
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks({ ...tasks, todo: [...tasks.todo, newTask] });
    setNewTask('');
  };

  return (
    <div>
      <header>
        <button onClick={redirectToLogin}>Let's Explore</button>
      </header>

      {!isLoggedIn && (
        <div id="loginPage">
          <h2>Login Page</h2>
          {/* Add your login form here */}
          <button onClick={showTaskDashboard}>Login</button>
        </div>
      )}

      {isLoggedIn && (
        <div id="taskDashboard">
          <h2>Task Management Dashboard</h2>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todo" >
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  id="todo"
                  className="task-list"
                >
                  <h3>Todo</h3>
                  {tasks.todo.map((task, index) => (
                    <Task key={task} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div id="createTask">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
