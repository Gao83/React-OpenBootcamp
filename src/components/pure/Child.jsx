import React, { useRef } from 'react'

function Child({ name, send, update }) {

    const messageRef = useRef('')
    const updateRef = useRef('')

    const pressedButton = () => {
        const text = messageRef.current.value
        return alert(`text input is: ${text}`)
    }

    const pressedButtonParam = (text) => {
        return alert(`Text: ${text}`)
    }

    const submitForm = (e) => {
        e.preventDefault()
        update(updateRef.current.value)
    }

    return (
        <div style={{ background: 'green', padding: '5px' }}>
            <p onMouseOver={() => console.log('On mouse over')}>
             {`Hello, ${name}`}
            </p>
            <button onClick={() => console.log('button 1 pressed')}>Button 1</button>
            <button onClick={pressedButton}>Text input</button>
            <button onClick={() => pressedButtonParam('Hello')}>Button 3</button>

            <input
                type="text"
                placeholder='insert a text'
                onFocus={() => console.log('input focused')}
                onChange={(e) => console.log('input changes', e.target.value)}
                onCopy={() => console.log('text copied')}
                ref={messageRef}
            />

            <button onClick={() => send(messageRef.current.value)}>Send message to the father</button>

            <div style={{ margin: '20px', background: 'red' }}>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        placeholder='new name'
                        ref={updateRef} />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    )
}

export default Child