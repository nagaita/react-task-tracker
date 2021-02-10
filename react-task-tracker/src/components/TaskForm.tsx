import React from 'react'

const TaskForm = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='text' placeholder='Add Day' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default TaskForm