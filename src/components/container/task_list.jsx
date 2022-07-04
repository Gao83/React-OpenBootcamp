import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/taskComponent'
import { Task } from './../../models/task.class'


function TaskListComponent() {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const changeState = () =>{
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
