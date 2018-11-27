import React, { Component } from 'react';


class Padre extends Component {
    render() {
        const cantidadVideo = this.props.cantidad;
        const listaHijos= [];
        for (let i = 0; i < cantidadVideo; i++) {
            listaHijos.push(this.props.children);
        }

        return (
            <div>
                {this.props.nombre}
                {listaHijos}


            </div>
        );
    }
}

export default Padre;