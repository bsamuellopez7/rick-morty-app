import { useState } from 'react';
import imagen1 from '../src/img/rick-morty.png'
import './App.css';
import Characters from './Componets/Characters';

function App() {
    const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch ("https://rickandmortyapi.com/api/character")
    //console.log(api)
    const characterApi = await api.json();
    //console.log(characterApi)
    //console.log("clicking")
    //console.log(characters);
    setCharacters(characterApi.results);
    //console.log(characters);
  };
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'> Rick & Morty</h1>
       { characters ? (
       <Characters characters={characters}></Characters>
       ):
       (
        <>
       <img src={imagen1} alt='Rick and Morty' className='img-home'/>
      <button onClick={reqApi} className='btn-search'>
        Buscar personajes
      </button>
      </>
  )}
      </header>
    </div>
  );
}

export default App;
