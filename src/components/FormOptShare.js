import React from 'react';
import shareIcon from '../images/address-card-regular.svg';
import twitterIcon from '../images/twitter-brands.svg';
import PropTypes from 'prop-types';

class FormOptShare extends React.Component {
    render() {
        let h2Classname = "share__title js__title--form";
        if (this.props.visible.share) {
            h2Classname = "share__title js__title--form share__title2 ";
        }
        const classeBoton = () => {
            if (this.props.cardURL) {
                return (' create__button grey__create__button')
            } else {
                return (' create__button')
            }
        }
        return (
            <div className="share--card">
                <div className="share__box">
                    <h2 className={h2Classname} id="share" onClick={this.props.changeCollap} >comparte</h2>
                    {!this.props.visible.share ||
                        <div className="share__form drop-down">
                            <div className="create__button-container">
                                <button type="submit" className={classeBoton()} onClick={this.props.handleSendData} disabled={this.props.cardURL}>
                                    <img className="create__button--icon" src={shareIcon} alt="" />crear tarjeta</button>
                            </div>
                            {this.props.cardURL &&
                             <div className="card__created--info drop-down" >
                             <p className="created--message">La tarjeta ha sido creada: </p>
                             <a href={this.props.cardURL} className="link__card">{this.props.cardURL}</a>
                             <div className="container__button-twitter">
                                 <a href="" className="share__button-twitter">
                                     <img src={twitterIcon} className="twitter__icon" alt="twitter-icon" />Compartir en twitter</a>
                             </div>
                         </div>
                          }
                        
                           
                        </div>}

                </div>
            </div>
        );
    }
}
FormOptShare.propTypes = {
    visible: PropTypes.object.isRequired,
    changeCollap: PropTypes.func.isRequired,
    handleChangeState: PropTypes.func.isRequired,
    handleSendData: PropTypes.func.isRequired,
    cardURL: PropTypes.string.isRequired
}
export default FormOptShare;