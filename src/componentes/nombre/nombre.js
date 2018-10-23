import React, { Component } from 'react';

class Nombre extends Component {
    render() {
        let estilo = {};
        if (this.props.par) {
            estilo = {
                color: "red"
            }
        }
        return (
            <div style={estilo}>
                {this.props.nombre}
            </div>
        );
    }
}

export default Nombre;
