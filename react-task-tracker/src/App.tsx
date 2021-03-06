import React from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import { useState } from 'react'

function App() {
  const [showsTaskForm, setShowsTaskForm] = useState(false)
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

  const addTask = (task: {text: string, day: string, reminder: boolean}) => {
    const currentMaxId = tasks.map((task) => task.id).reduce((maxId, currentId) => Math.max(maxId, currentId))
    const newTask = { id: currentMaxId + 1, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: number) =>  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTaskReminder = (id: number) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  const toggleTaskForm = () => {
    setShowsTaskForm(!showsTaskForm)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={toggleTaskForm} showsTaskForm={showsTaskForm}/>
      {showsTaskForm && <TaskForm onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskReminder} />
    </div>
  );
}

export default App;
