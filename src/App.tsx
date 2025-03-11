import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Poemes from './Poemes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inscription />} /> {/* Page d'inscription par défaut */}
        <Route path="/inscription" element={<Inscription />} /> {/* Page d'inscription */}
        <Route path="/connexion" element={<Connexion />} /> {/* Page de connexion */}
        <Route path="/poemes" element={<Poemes />} /> {/* Page des poèmes */}
      </Routes>
    </Router>
  );
}

export default App;