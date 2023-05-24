import React from 'react'

export default function Characters(props) {
  const {characters, setCharacters} = props;

  const resetCharacters =() =>{
    console.log("Reseteando...");
    setCharacters(null);
  };
  
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Home</span>
      <div className="container-characters">
        {characters.map((character, index) => (
            <div className="character-container" key={index}>
              <p>
                {character.name}
              </p>
              </div>
          )
          )
        }

    </div>
  </div>
  )
}
 