import React from 'react'
import {useParams} from 'react-router-dom'

function TaskDetailPage() {

    const {id} = useParams()

    return (
        <div>
            <h1>
                TaskDetailPage - {id}
            </h1>
        </div>
    )
}

export default TaskDetailPage