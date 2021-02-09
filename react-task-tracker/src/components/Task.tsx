import React from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
    task: Task,
    onDelete: (id: number) => void
}

type Task = {
    id: number,
    text: string,
    day: string,
    reminder: Boolean
}

const Task: React.FC<Props> = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3 key={task.id}>{task.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task


