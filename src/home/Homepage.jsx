import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const images = [
  '/bedd1.png',
  '/bedd2.png',
  '/bedd3.png',
];

export const Homepage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
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
    <div className="home">
      <nav className="navbar">
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
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#" className="inic" onClick={handleHomeClick}>INICIO</a></li>
          <li><a href="#" onClick={handleRegistroClick}>REGISTRARSE</a></li>
          <li><a href="#" onClick={handleContactosClick}>CONTACTANOS</a></li>
        </ul>
      </nav>
      <div className="carousel-container">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={image} className={`d-block w-100 ${index === 1 ? 'segunda-cama' : ''} ${index === 2 ? 'tercera-cama' : ''}`} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            <button type="button" className="login-button1" onClick={handleLoginClick}>Iniciar Sesion</button>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <p>Bienvenidos</p>
          
          <h5>Sleep Track es un producto que busca ayudar a conciliar el sueño a personas con insomnio, llevando un registro de sus patrones de sueño y dandole recomendaciones de como mejorar su calidad de sueño</h5>
        </div>
        <div className="cel-imagen">
          <img src="cel.jpg" alt="cel1" className='celu1' />
          <img src="cel2.jpg" alt="cel2" className='celu2' />
          <img src="cel3.jpg" alt="cel3" className='celu3' />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
