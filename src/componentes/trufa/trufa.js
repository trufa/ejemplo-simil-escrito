import React, { Component } from 'react';


class Trufa extends Component {
    render() {
        return (
            <div>
                Trufa
                {this.props.edad}
                {this.props.profesion}
            </div>
        );
    }
}

export default Trufa;