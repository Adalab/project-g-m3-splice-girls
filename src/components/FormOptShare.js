import React from 'react';
import shareIcon from '../images/address-card-regular.svg';
import twitterIcon from '../images/twitter-brands.svg';
import PropTypes from 'prop-types';

class FormOptShare extends React.Component {
    render() {
        let h2Classname = "share__title js__title--form";
        if (this.props.visible.share ){
            h2Classname ="share__title js__title--form share__title2 ";
        }
        return (
            <div className="share--card">
                <div className="share__box">
                    <h2 className={h2Classname} id="share" onClick={this.props.changeCollap} >comparte</h2>
                    {!this.props.visible.share ||
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
                        </div>}

                </div>
            </div>
        );
    }
}
FormOptShare.propTypes= {
    
    visible: PropTypes.object,
    changeCollap: PropTypes.func,
    handleChangeState: PropTypes.func,
    cardPalette: PropTypes.string,
    cardName: PropTypes.string,
    cardJob: PropTypes.string,
    cardEmail: PropTypes.string,
    cardTelephone: PropTypes.string,
    cardLinkedin: PropTypes.string,
    cardGithub: PropTypes.string,
  }
export default FormOptShare;