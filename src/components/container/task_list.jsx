import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/taskComponent'
import { Task } from './../../models/task.class'
import '../../styles/task.scss'


function TaskListComponent() {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        console.log('task state has been modified')
        setLoading(false)
        return () => {
            console.log('task list component is going to unmount')

        };
    }, [tasks]);


    const changeState = (id) => {
        console.log('to do: cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5> Your tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'> Title</th>
                                    <th scope='col'> Description</th>
                                    <th scope='col'> Priority</th>
                                    <th scope='col'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* iterar sobre una lista de tareas para iterar sobre varias filas */}
                                <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Aplicar un for o map para renderizar la lista */}

        </div>
    )
}



export default TaskListComponent
