import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function NotFoundPage() {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <h1> Page 404 Not found </h1>

      <div>
        <button onClick={() => navigate('/')}>
          Go back to Home
        </button>
      </div>
    </div>
  )
}

export default NotFoundPage
