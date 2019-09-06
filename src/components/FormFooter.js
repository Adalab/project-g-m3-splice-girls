import React from 'react';

import logoTeselas from '../images/logo-teselas-nomargin.png';
import logoAda from '../images/logo-adalab.png';

class FormFooter extends React.Component {
    render() {
        return (
            <footer className="footer__container">
                <div className="footer-container">
                    <p className="copyright">Awesome profile-cards @2018</p>
                    <div className="teselas-logo-container">
                        <img src={logoTeselas} alt="Teselas Logo" className="logo-teselas" />
                    </div>
                    <a href="https://adalab.es/" className="logo-adalab-link" target="blank"
                    ><img src={logoAda} alt="logo de adalab" className="image-adalab" /></a>
                </div>
            </footer>

        );
    }
}


export default FormFooter;