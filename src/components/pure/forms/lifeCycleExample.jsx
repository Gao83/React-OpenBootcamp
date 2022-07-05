import React, { Component } from 'react';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje  del componente')

    }

    componentDidMount() {
        console.log('DIDMOUNT: al acabar el montaje  del componente antes de pintarlo')

    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECIEVEPROPS: si va a recibir props por parte del padre')

    }

    shouldComponentUpdate(nextProps, nextState){
        // return true || false  para controlar si el componente debe actualizarse
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WILLUPDATE: justo antes de actualizarse')

    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: justo antes de desaparecer')

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LifeCycleExample;
