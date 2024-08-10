import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contactos.css';

export const Contactos = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="contactos-container">
      <nav className="navbar6">
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
        <ul className={`navbar-links6 ${isOpen ? 'open' : ''}`}>
          <li><a href="javascript:void(0)" className="active" onClick={handleHomeClick}>INICIO</a></li>
          <li><a href="javascript:void(0)" onClick={handleRegistroClick}>REGISTRARSE</a></li>
          <li><a href="javascript:void(0)" className='cont' onClick={handleContactosClick}>CONTACTANOS</a></li>
        </ul>
      </nav>
      <div className="cuadro">
        <div className="cuadro-texto">
          <h2><strong>Contacto</strong></h2>
          <p className='text1'><strong>Por favor complete el formulario a continuación para ponerse en contacto.</strong></p>
          <p>Para aclarar dudas, quejas, comentarios, recomendaciones y servicio al cliente.</p>
          <p className='p-email'><strong>E-mail:</strong><br />serviciosleep25gmail.com</p>
        </div>
        <div className="cuadro-formulario">
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder='Nombre'/>
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" placeholder='E-Mail' />
              <label htmlFor="motivo">Motivo</label>
              <input type="text" id="motivo" name="motivo" placeholder='Motivo' />
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" placeholder='Mensaje' className='msj'></textarea>
            </div>
            <button type="submit"><strong>Enviar</strong></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactos;
