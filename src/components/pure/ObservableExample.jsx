import React, { useState } from 'react'
import { getNumbers } from '../../services/ObservableService'

function ObservableExample() {

    const [number, setNumber] = useState(0)

    console.log('Subscription to observable')
    const obtainNewNumbers = () => {
        getNumbers.subscribe(

            {
                next(newNumber) {
                    console.log('New number is', newNumber)
                    setNumber(newNumber)
                },
                error(error) {
                    alert(`Something went wrong ${error}`)
                },
                complete() {
                    alert(`Finished with ${number}`)
                    console.log('Done with the observable')

                }
            }
        )
        console.log('Finished recieving numbers')

    }


    return (
        <div>
            <h1>Observable Example</h1>
            <h2>Number:{number}</h2>
            <button onClick={obtainNewNumbers}>Obtain new numbers</button>
        </div>
    )
}

export default ObservableExample