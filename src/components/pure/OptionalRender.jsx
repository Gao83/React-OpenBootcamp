import React, { useState } from 'react'

const loginStyle = {
    background: 'olive',
    color: 'white',
    fontWeigth: 'bold',
}

const logoutStyle = {
    background: 'tomato',
    color: 'white',
    fontWeigth: 'bold'

}


function LoginButton({ loginAction }) {
    return (
        <button onClick={loginAction} style={loginStyle}> Login</button >
    )
}

function LogoutButton({ logoutAction }) {
    return (
        <button onClick={logoutAction} style={logoutStyle}> Logout</button>
    )
}


function OptionalRender() {

    const [access, setAcces] = useState(false);

    // const updateAcces = () => {
    //     setAcces(!access)
    // }

    // let optionalButton = access ?
    //     <button onClick={updateAcces}> Logout</button> :
    //     <button onClick={updateAcces}> Login</button>

    const loginAction = () => {
        setAcces(true)

    }

    const logoutAction = () => {
        setAcces(false)
    }

    let optionalButton = access ?
        <LogoutButton logoutAction={logoutAction} ></LogoutButton> :
        <LoginButton loginAction={loginAction} ></LoginButton>

    const [numbMessages, setnumbMessages] = useState(0);


    let addMessages = () => {
        setnumbMessages(numbMessages + 1)
    }

    return (
        <div>
            {optionalButton}
            
            {/* {numbMessages > 0 && numbMessages === 1 && <p>You have {numbMessages} new message...</p>}
            {numbMessages > 1 && <p>You have {numbMessages} new messages...</p>}
            {numbMessages === 0 && <p>There are no new messages</p>} */}

            {access ? (<div>
                {numbMessages > 0 ?
                    <p>You have {numbMessages} new message{numbMessages > 1 ? 's' : null}</p> : <p>There are no new messages</p>
                }
                <button onClick={addMessages}>{numbMessages === 0 ? 'Add new message' : 'Add more messages'}</button>
            </div>) : null}



        </div>
    )
}

export default OptionalRender
