import React from 'react'

function AsyncExample() {

    async function generateNumber() {
        return 1
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response ${response}`))
            .catch((e) => alert(`Something went wrong ${e}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response ${response}`))
            .catch((e) => alert(`Something went wrong ${e}`))

    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Isaac')
            .then((response) => {
                let value = response
                alert(`Saved Name ${value}`)
            })
            .catch((e) =>
                alert(`Something went wrong ${e}`)
            )
            .finally(() =>
                console.log(`SUCCESS: Name saved succesfully `)
            )

    }


    async function obtainMessage() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)

        })

        let message = await promise

        await alert(`Message recieved ${message}`)
    }

    const returnError = async () => {
        await Promise.reject(new Error('Ooops!'))

    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`OK ${response}`))
            .catch((e) => alert(`${e}`))
            .finally(() => alert('Executed'))
    }


    const urlNotFound = async () => {

        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response ${JSON.stringify(response)}`)
        }
        catch (e) {
            alert(`Something went wrong with your URL: ${e} (check your console)`)
        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all(

            [
                fetch('https://jsonapi.org/examples/'),
                fetch('http://regres.in/api/users?page=2'),
            ]
        )
            .catch((e) => alert(`Something went wrong with your URL: ${e} (check your console)`))
    }

    return (
        <div>
            <h1>Async Examples</h1>

            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save Name sessionStorage aand show</button>
            <button onClick={obtainMessage}>Recieve message in 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Obtain URL</button>
            <button onClick={multiplePromise}>Obtain data</button>

        </div>
    )
}

export default AsyncExample