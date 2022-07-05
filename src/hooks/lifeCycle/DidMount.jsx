import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount() {
        console.log('comportamiento antes de que el el componente sea añadido al DOM (renderice)')
    }
    render() {
        return (
            <div><h1>DidMount</h1></div>
        )
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('comportamiento antes de que el el componente sea añadido al DOM (renderice)')

    }, []) //cuando ponemos corechetes, se ejecuta 1 vez
    return (
        <div><h1>DidMount</h1></div>
    );
}


