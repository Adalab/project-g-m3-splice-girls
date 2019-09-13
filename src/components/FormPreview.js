import React from 'react';
import DefaultUrlImage from './DefaultUrlImage';
import PropTypes from 'prop-types';

class FormPreview extends React.Component {
    render() {
        return (
            <div className="preview__box">
                <div className="button-card__box">
                    <button className="reset__button" type="reset"><img src="assets/images/trash-alt-regular.svg" className="far fa-trash-alt" alt="" /><span className="reset__button-title">Reset</span></button>
                    <div className={this.props.cardPalette === '' ? 'card__box' :  'card__box ' + `palette${this.props.cardPalette}`}>
                        <div className="name-job__box">
                            <p className="name__card">
                                {this.props.cardName === ''? 'Nombre Apellido': this.props.cardName}
                            </p>
                            <p className="job__card">
                                {this.props.cardJob === ''? 'front-end developer': this.props.cardJob}
                            </p>
                        </div>
                        <div className="image-card js__profile-image" style={{backgroundImage:`url(${DefaultUrlImage})`}}></div>
                        <ul className="rrss__list">
                            <li className={this.props.cardEmail === '' ? 'li--card item2 supersecret':'li--card item2'}>
                                <a href={this.props.cardEmail === '' ? '#':'mailto:' + this.props.cardEmail} 
                                className="link__icon__card link__icon__card-mail"> <i className="far fa-envelope card-icon"></i></a>
                            </li>
                            <li className={this.props.cardTelephone === '' ? 'li--card item1 supersecret':'li--card item1'}>
                                <a href={this.props.cardTelephone === '' ? '#':'tel:' + this.props.cardTelephone} className="link__icon__card link__icon__card-phone"> <i className="fas fa-mobile-alt phone-icon"></i> </a>
                            </li>
                            <li className={this.props.cardLinkedin === '' ? 'li--card item3 supersecret':'li--card item3'}>
                                <a href={this.props.cardLinkedin === '' ? '#':'https://www.linkedin.com/in/' + this.props.cardLinkedin}  className="link__icon__card link__icon__card-linkedin" target="blank"> <i className="fab fa-linkedin-in linkedin-icon"></i> </a>
                            </li>
                            <li className={this.props.cardGithub === '' ? 'li--card item4 supersecret':'li--card item4'}>
                                <a href={this.props.cardGithub === '' ? '#':'https://www.github.com/' + this.props.cardGithub} className="link__icon__card link__icon__card-github" target="blank"> <i className="fab fa-github-alt github-icon"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


FormPreview.propTypes= {
    handleChangeState: PropTypes.func, 
    cardPalette: PropTypes.string, 
    cardName: PropTypes.string,
    cardJob: PropTypes.string,
    cardEmail: PropTypes.string,
    cardTelephone: PropTypes.string,
    cardLinkedin: PropTypes.string,
    cardGithub: PropTypes.string,
  }

export default FormPreview;