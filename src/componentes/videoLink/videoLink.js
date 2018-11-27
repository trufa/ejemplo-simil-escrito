import React, { Component } from 'react';


class VideoLink extends Component {
    render() {
        return (
            <div>
                {this.props.titulo}
                {this.props.imagen}
            </div>
        );
    }
}

export default VideoLink;
