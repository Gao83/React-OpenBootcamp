import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('comportamiento cuando recibe nuevos props o cambio en su estado')
    }
    render() {
        return (
            <div><h1>DidUpddate</h1></div>
        )
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('comportamiento cuando recibe nuevos props o cambio en su estado')

    }) //cuando no ponemos corechetes se ejecuta todas las veces
    return (
        <div><h1>DidUpddate</h1></div>
    );
}
