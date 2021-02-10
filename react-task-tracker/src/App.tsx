import React from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task 1',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'task 2',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'task 3',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
  ])

  const deleteTask = (id: number) =>  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTaskReminder = (id: number) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <TaskForm />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskReminder} />
    </div>
  );
}

export default App;
