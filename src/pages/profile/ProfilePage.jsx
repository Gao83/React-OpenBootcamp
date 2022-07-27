import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function ProfilePage() {
    const location = useLocation()
    const navigate = useNavigate()

    console.log('we are in route', location.pathname)

    return (
        <div>
            <div>
                <h1>
                    Profile Page
                </h1>
            </div>
            <div>
                <button onClick={()=> navigate('/tasks')}>Your tasks</button>
            </div>
            <div>
                <button onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default ProfilePage