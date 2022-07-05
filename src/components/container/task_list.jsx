import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/taskComponent'
import { Task } from './../../models/task.class'


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
            <div>
                Your tasks:
            </div>
            {/* Aplicar un for o map para renderizar la lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}



export default TaskListComponent
