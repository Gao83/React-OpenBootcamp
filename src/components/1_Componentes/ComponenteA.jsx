import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './ComponenteB';

class ComponenteA extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
     
    }
    render() {
        return (
            <div>
                {/* <h1>Nombre: {this.props.name}</h1>
                <h1>Apellido: {this.props.lastName}</h1>
                <h2>Email: {this.props.email}</h2>
                <div>Conectado {this.state.conectado}</div> */}
                <ComponenteB
                    name={this.props.name}
                  
                />
            </div>
        );
    }

    // isConected = () => {
    //     this.setState((true))
    // }
}


ComponenteA.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,

};


export default ComponenteA;
