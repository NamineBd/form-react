import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Connexion: React.FC = () =>{
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulaire de connexion soumis:', formData);

    // Simuler une connexion réussie
    if (formData.email && formData.motDePasse) {
      navigate('/poemes'); // Rediriger vers la page des poèmes
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="App">
      <div className="auth-options">
        <a
          href="https://github.com/login/oauth/authorize"
          className="auth-button github"
          title="Continuer avec GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://accounts.google.com/o/oauth2/auth"
          className="auth-button google"
          title="Continuer avec Google"
        >
          <i className="fab fa-google"></i>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Se connecter</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="motDePasse"
          placeholder="Mot de passe"
          value={formData.motDePasse}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          Se connecter
        </button>
        <br/>
        <br/>
        <p class="liens">
            Pas encore inscrit ? <a href="/inscription">S'inscrire</a>
        </p>
      </form>
    </div>
  );
}

export default Connexion;