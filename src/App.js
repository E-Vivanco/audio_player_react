
import { useState, useEffect } from 'react';
import Controles from './components/Controles';
import Songs from './components/Songs';
import './index.css'

function App () {

  const [songs, setSongs] = useState(['https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3']) // arreglo para contener canciones x medio de la consulta fetch
  const [isPlaying, setPlaying] = useState(false); // seteamos en estado false el play
  //const [isLoading, setIsLoading] = useState(true); // indicador de carga de consulta fetch
  const [activaSong,setactivaSong] =useState(true); // controolamos cada cancion que se activa
 
  const songURL = "https://assets.breatheco.de/apis/sound/";
 
useEffect(() => {     //hooks que realiza la consulta fetch y setea la data en setSongs
  const recuperaSongs = async ()=>{
   try{
     const response =  await fetch("https://assets.breatheco.de/apis/sound/songs");
     const info2= await response.json();
           setSongs(info2);
         //  setIsLoading(false);//  carga finalizada
       }catch(error){
         console.log(error);
       }       
     }
     recuperaSongs()

     }, []);

 // se pinta la tabla de canciones con formato previa mente definido en style junto con los botones
  return (
    <>
      <div className='titulo'><h2 className='py-2 mx-5 w-50'>Spotify-React</h2></div>
      <div className=" card d-flex w-100 flex-column">
              <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Songs songs={songs}
                         setactivasong={setactivaSong}
                          songurl={songURL}
                           setplaying={setPlaying} />
                    </tbody>
                </table>
                </div>
          
      </div> 
      
      <Controles
          songurl={songURL}
           setactivasong={setactivaSong}
             setplaying={setPlaying}
             isplaying={isPlaying}
             songs={songs}
             setsongs={setSongs}
             activasong={activaSong}
         />
           
    </>
  );
}

export default App;

