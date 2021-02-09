import React from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
