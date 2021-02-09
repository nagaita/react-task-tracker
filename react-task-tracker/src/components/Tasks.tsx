type Task = {
    id: number,
    text: string,
    day: string,
    reminder: Boolean
}

type Props = {
    tasks: Task[]
}

const Tasks: React.FC<Props> = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
