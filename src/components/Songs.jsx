import React from 'react';
import '../styles/Songs.css';
import PropType from 'prop-types';
import { useRef } from 'react';
//import Tabla from './Tabla';

const Songs = ({songs,songurl,setactivasong,setplaying}) => {
  let audioRef = useRef(); //sacamos referencia del audio
  let posRef = useRef();// sacamos refenecia de la posicion

  const cancionClick = (name, url) => {  // rescatamos de la refencia los datos de la cancion mas la url para pintar tabla y
    if (audioRef.current) {         // se activa cada cancion de la tabla al hacer click
      audioRef.current.pause();
    }
  
    const allUrl = songurl + url;
    //console.log(allUrl)
    const otroAudio = new Audio(allUrl);
    //console.log(otroAudio)
    otroAudio.play();
    //console.log(otroAudio.play())
    audioRef.current = otroAudio;
    setactivasong(name); // capturamos el nombe de la cancion activada
    //console.log(setactivaSong(name))
    setplaying(true);
    posRef.current = songs.findIndex((song) => song.url === url);
    //console.log(posRef.current)
  };

  return (
    <div>

      {songs.map((song,id) => (
                            <tr className="song" key={id} onClick={() => cancionClick(song.name, song.url)}>
                                <td>{song.id}</td>
                                <td>{song.name}</td>
                                <td>{song.url}</td>
                            </tr>
                        ))}
    </div>
  );
}
Songs.prototype={
  audioRef: PropType.object,
  posRef: PropType.object,
  cancionClick: PropType.function,
  
}
export default Songs;
