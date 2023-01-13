import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Projetos from './paginas/projeto/Projetos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/projetos' element={<Projetos/>}></Route>
        <Route path='/' element={<Projetos/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
