import React from 'react';
import shareIcon from '../images/address-card-regular.svg';
import twitterIcon from '../images/twitter-brands.svg';

class FormOptShare extends React.Component {
    render() {
        return (
            <div className="share--card">
                <div className="share__box">
                    <h2 className="share__title js__title--form" id="share">comparte</h2>
                    <div className="share__form drop-down">
                        <div className="create__button-container">
                            <button type="submit" className="create__button">
                                <img className="create__button--icon" src={shareIcon} alt="" />crear tarjeta</button>
                        </div>
                        <div className="card__created--info drop-down">
                            <p className="created--message">La tarjeta ha sido creada:</p>
                            <a href="" className="link__card"></a>
                            <div className="container__button-twitter">
                                <a href="" className="share__button-twitter">
                                    <img src={twitterIcon} className="twitter__icon" alt="twitter-icon" />Compartir en twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormOptShare;