import React from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
    task: Task
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

type Task = {
    id: number,
    text: string,
    day: string,
    reminder: Boolean
}

const Task: React.FC<Props> = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3 key={task.id}>{task.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task


