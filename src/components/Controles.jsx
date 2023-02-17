import React from 'react';
import '../styles/Controles.css';
import { useRef} from 'react';

const Controles = ({setplaying,isplaying,songs,setactivasong,songurl,activasong}) => {
  //let activasong2=[]
  let audioRef = useRef(); //sacamos referencia del audio
  let posRef = useRef();// 
  const avanzaBoton = (avanza) => {  // funcion que nos permite avanzar con boton de play
    if (audioRef.current) {
      audioRef.current.pause();
    }
  
    if (avanza === 'backward') {
      if (posRef.current > 0) {
        posRef.current--;
      } else {
        posRef.current = songs.length - 1;
      }
    } else if (avanza === 'forward') {
      if (posRef.current < songs.length - 1) {
        posRef.current++;
      } else {
        posRef.current = 0;
      }
    }
  
   activasong = songs[posRef.current];
  // setactivasong=activasong2//asignamos una posicion a la cancion
   //console.log(activasong)
   //console.log(activasong.url)
    const allUrl = songurl + activasong.url; //enviamos toda la url de play
   // console.log(allUrl)
    const otroAudio = new Audio(allUrl);  //creamos nuevo audio
   // console.log(otroAudio)
    otroAudio.play(); //creamos nuevo audio
   // console.log(otroAudio.play())
    audioRef.current = otroAudio; //pasamos referencia a nuevo audio 
   // console.log("soy todas las canc:",songs)
    setactivasong(activasong.id +' '+ activasong.name);
   //console.log("lista de lector",setactivasong(activasong.id+' '+activasong.name))
    setplaying(true);//estado de play activado
  };

  const PlayBoton = () => {   // funcion que controla la activacion o detencion de cancion seleccionada
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    setplaying(!isplaying); //detenemos la reproduccion-song
  };
  
  return (
    <>
    <div className='justify-content-center botones d-flex flex-row'>
      
            <button className="btn btn-dark m-2" onClick={() => avanzaBoton('backward')}><i className="fa-solid fa-backward"></i></button>
            <button className="btn btn-dark m-2" onClick={PlayBoton}>{isplaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
            <button className="btn btn-dark m-2" onClick={() => avanzaBoton('forward')}><i className="fa-solid fa-forward"></i></button>
            <div className="song m-4">{activasong}</div>
             
        </div>
        </>
  );
}

export default Controles;
