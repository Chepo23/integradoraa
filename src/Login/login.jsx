import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export const Login = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleRegistroClick = () => {
    navigate('/registro');
  };

  const handleContactosClick = () => {
    navigate('/contactos');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', contrasena);
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email: email,
        password: contrasena,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const userId = response.data.userId;
      navigate('/graficas', { state: { userId } });
    } catch (error) {
      if (error.response) {
        setError('Credenciales inválidas');
      } else {
        setError('Error al conectar con el servidor');
      }
    }
  };

  return (
    <div className="main-container">
      <nav className="navbar1">
        <div className="navbar-logo">
          <span>
            SLEEP 
            <img src="logo.png" alt="Logo" className="logo-image" />  
            TRACK
          </span>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-links2 ${isOpen ? 'open' : ''}`}>
          <li><a href="#" className="active" onClick={handleHomeClick}>INICIO</a></li>
          <li><a href="#" onClick={handleRegistroClick}>REGISTRARSE</a></li>
          <li><a href="#" onClick={handleContactosClick}>CONTACTANOS</a></li>
        </ul>
      </nav>
      <div className="login-box">
        <h2 className="iniciar">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          
          <button type="submit">Iniciar Sesion</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div> 
  );
};

export default Login;
