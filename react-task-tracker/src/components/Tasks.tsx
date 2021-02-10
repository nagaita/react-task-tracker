import Task from './Task'

type Props = {
    tasks: Task[],
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

const Tasks: React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
    let taskElement
    if (tasks.length == 0) {
        taskElement = <p>No tasks to show</p>
    } else {
        taskElement = tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
    }

    return (
        <div>
            {taskElement}                          
        </div>
    )
}

export default Tasks
