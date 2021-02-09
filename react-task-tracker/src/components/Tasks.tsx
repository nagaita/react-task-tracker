import Task from './Task'

type Props = {
    tasks: Task[]
}

const Tasks: React.FC<Props> = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}

export default Tasks
