import React, { useState } from 'react'
import Child from './../pure/Child.jsx'
function Father() {

    const [name, setName] = useState('Martin')

    const showMessage = (text) => {
        alert(text)
    }

    const updateName = (newName) => {
        setName(newName)
    }

    return (
        <div style={{ background: 'tomato', padding: '20px' }}>

            <Child name={name} send={showMessage} update={updateName}></Child>
            <p> name: {name}</p>

        </div>
    )
}

export default Father