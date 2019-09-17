import React from 'react';
import { Link } from 'react-router-dom'; 

class FormHeader extends React.Component {
    render() {
        return (
            <header className="header__box">
                <Link to="/"><div className="header__form">
                    <h1 className="title__form">awesome profile cards</h1>
                </div></Link>
            </header>
        );
    }
}


export default FormHeader;