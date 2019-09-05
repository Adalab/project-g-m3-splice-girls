import React from 'react';

class FormFooter extends React.Component {
    render() {
        return (
            <footer className="footer__container">
                <div className="footer-container">
                    <p className="copyright">Awesome profile-cards @2018</p>
                    <div className="teselas-logo-container">
                        <img src="assets/images/logo-teselas-nomargin.png" alt="Teselas Logo" className="logo-teselas" />
                    </div>
                    <a href="https://adalab.es/" className="logo-adalab-link" target="blank"
                    ><img src="assets/images/logo-adalab.png" alt="logo de adalab" className="image-adalab" /></a>
                </div>
            </footer>

        );
    }
}


export default FormFooter;