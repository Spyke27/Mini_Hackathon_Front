import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Projetos from './paginas/projeto/Projetos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/projetos' element={<Projetos/>}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;