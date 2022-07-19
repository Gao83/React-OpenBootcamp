import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

function TaskForm({ add, length }) {
    const nameRef = useRef()
    const descriptionRef = useRef()
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault() // para evitar la recarga de la pagina
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )

        add(newTask)
        e.target.reset()
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }


    const urgentlStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} type="text" id='inputName' className='form-control form-control-lg' required autoFocus placeholder='task name' />
                <input ref={descriptionRef} type="text" id='inputDescription' className='form-control form-control-lg' required placeholder='task description' />
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selecLevel' className='form-control form-control-lg'>
                    <option value={LEVELS.NORMAL} style={normalStyle}>Normal</option>
                    <option value={LEVELS.URGENT} style={urgentlStyle}>Urgent</option>
                    <option value={LEVELS.BLOCKING} style={blockingStyle}>Blocking</option>

                </select>
                <button type='submit' className='btn btn-dark btn-lg ms-2'>
                    {length > 0 ? 'Add task' : 'Create new task'}
                </button>
            </div>
        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}
export default TaskForm