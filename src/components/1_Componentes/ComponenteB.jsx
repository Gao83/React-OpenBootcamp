import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ComponenteB({ name, lastName, email}) {

    const [isConected, setIsConected] = useState(false)
    const [newName, setNewName] = useState(name)

    const changeName = () => {
        setNewName('PEPE')
        console.log('------------------')
    }
   
    return (
        <div>
            <h1 onClick={changeName}>Nombre: {newName}</h1>
            <h1>Apellido: {lastName}</h1>
            <h2>Email: {email}</h2>
            <h2></h2>
        </div>
    )
}

ComponenteB.propTypes = {}

export default ComponenteB
