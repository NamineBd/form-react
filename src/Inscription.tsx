import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

  const Inscription: React.FC = () => {
    const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      motDePasse: '',
      confirmerMotDePasse: '',
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
    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    console.log('Formulaire soumis:', formData);
    navigate('/connexion'); // Rediriger vers la page de connexion
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
        <h2>S'inscrire</h2>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
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
        <input
          type="password"
          name="confirmerMotDePasse"
          placeholder="Confirmer le mot de passe"
          value={formData.confirmerMotDePasse}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          S'inscrire
        </button>
        <br/>
        <br/>
        <p class="liens">
            Déjà inscrit ? <a href="/connexion">Se connecter</a>
        </p>
      </form>
    </div>
  );
}

export default Inscription;