import './App.css';
import { Routes, Route } from "react-router-dom"
import CharactersPage from "./CharactersPage"
import React from 'react';
import CharacterDetailsPage from './CharacterDetailsPage';
import { CharacterProvider } from './CharacterContext';

function App() {
  return (
    <div className="App">
      <CharacterProvider>
        <Routes>
          <Route path="/" element={ <CharactersPage/> } />
          <Route path= "/characters/:id" element={ <CharacterDetailsPage/> } />
        </Routes>
      </CharacterProvider>
    </div>
  );
}

export default App;
