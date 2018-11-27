import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoLink from './componentes/videoLink/videoLink';
import ListaVideo from './componentes/listaVideo/listaVideo';
import Nairyn from './componentes/nairyn/nairyn';
import Trufa from './componentes/trufa/trufa';
import Padre from './componentes/padre/padre';
import Hijo from './componentes/hijo/hijo';


class App extends Component {
  render() {
    const cantidadVideo = 10;
    const listVideos = [];
    for (let i = 0; i < cantidadVideo; i++) {
      listVideos.push();
    }
    return (
        <div>
            <VideoLink titulo="Este es el titulo!!" imagen="imagen!!"/>
            {listVideos}
            <ListaVideo/>
            <Nairyn/>
            <Trufa edad={30} profesion={'tecnologia'}/>
            <Padre nombre={'juan'} cantidad={3}>
                <Hijo/>
            </Padre>


        </div>
    );
  }
}

export default App;
