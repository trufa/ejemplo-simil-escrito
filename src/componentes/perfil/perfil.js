import React, { Component } from 'react';
import Nombre from '../nombre/nombre';

class Perfil extends Component {
    render() {
        const list = [];
        for (var i = 0; i < this.props.cantidad; i += 1) {
            list.push(<Nombre nombre={"trufa!!"} par={i % 2 !== 0}/>);
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Perfil;
