import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

function AboutPage() {

  const location = useLocation()
  const navigate = useNavigate()

  console.log('we are in route', location.pathname)

  return (
    <div>
      <h1>
        About FAQS
      </h1>

      <div>
        <button onClick={() => navigate('/')}>
          Go to Home
        </button>
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button onClick={() => navigate(+1)}>
          Go Forward
        </button>
      </div>
    </div>
  )
}

export default AboutPage