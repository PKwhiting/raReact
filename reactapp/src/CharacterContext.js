import React from 'react';

const CharacterContext = React.createContext();

function CharacterProvider(props) {
  const [character, setCharacter] = React.useState({
    id: '',
    fullName: '',
    title: '',
    family: '',
    image: '',
    imageurl: ''
  });


  const contextValue = {
    character,
    setCharacter
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {props.children}
    </CharacterContext.Provider>
  );
}

export { CharacterContext, CharacterProvider };
