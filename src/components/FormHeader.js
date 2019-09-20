import React from 'react';
import { Link } from 'react-router-dom'; 

class FormHeader extends React.Component {
    render() {
        return (
            <header className="header__box">
                <div className="header__form">
                <Link to="/"><h1 className="title__form">awesome profile cards</h1></Link>
                </div>
            </header>
        );
    }
}


export default FormHeader;