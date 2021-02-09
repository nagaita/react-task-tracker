import React from 'react'

const tasks = [
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
]

const Tasks = () => {
    return (
        <div>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </div>
    )
}

export default Tasks
