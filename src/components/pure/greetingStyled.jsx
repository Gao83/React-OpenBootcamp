import React, { useState } from 'react';

const GreetingStyled = (props) => {

    const loggedStyle = {
        color: 'white',
        fontWeight: 'bold'
    }

    const unLoggedStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    const [logged, setLogged] = useState(false)

    const changeLog = () => {
        setLogged(!logged)
    }

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>

            {logged ? <p>Hola,{props.name}</p> : <p>Please login</p>}

            <button onClick={changeLog}> {logged ? 'Logout' : 'Login'}
</button>
        </div >
    );
}

export default GreetingStyled;
