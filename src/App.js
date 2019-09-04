import React from 'react';
import './scss/main.scss';
import iconDesign from './images/object-ungroup-regular.svg';

function App() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-headermain">
        <header className="page__header">
          <div className="header">
            <h1 className="page__title">awesome profile cards</h1>
          </div>
        </header>
        <main className="page__main">
          <div className="main__container">
            <h2 className="main__title">Crea tu tarjeta de visita</h2>
            <p className="main__subtitle">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <div className="box">
              <ul className="box__list">
                <li className="list__icon">
                  <img className="icon" src={iconDesign} alt="icono-diseña" />
                  <p className="icon__label">diseña</p>
                </li>
                <li className="list__icon">
                  <img className="icon" src="assets/images/keyboard-regular.svg" alt="icono-rellena" />
                  <p className="icon__label">rellena</p>
                </li>
                <li className="list__icon">
                  <img className="icon" src="assets/images/share-alt-solid.svg" alt="icono-comparte" />
                  <p className="icon__label">comparte</p>
                </li>
              </ul>
            </div> <a href="form-cards.html" className="landing__button">
              <div className="button__container">Comenzar</div>
            </a>
          </div>
        </main>
      </div>
      <footer className="footer__container">
        <div className="footer-container">
          <p className="copyright">Awesome profile-cards @2018</p>
          <div className="teselas-logo-container">
            <img src="assets/images/logo-teselas-nomargin.png" alt="Teselas Logo"
              className="logo-teselas" />
          </div> <a href="https://adalab.es/" className="logo-adalab-link" target="_blank"><img src="assets/images/logo-adalab.png" alt="logo de adalab" className="image-adalab" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
