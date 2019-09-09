import React from 'react';

class FormPreview extends React.Component {
    render() {
        return (
            <div className="preview__box">
                <div className="button-card__box">
                    <button className="reset__button" type="reset"><img src="assets/images/trash-alt-regular.svg" className="far fa-trash-alt" alt="" /><span className="reset__button-title">Reset</span></button>
                    <div className="card__box">
                        <div className="name-job__box">
                            <p className="name__card">{this.props.cardName === ''? 'Nombre y apellido': this.props.cardName}</p>
                            <p className="job__card">front-end developer</p>
                        </div>
                        <div className="image-card js__profile-image"></div>
                        <ul className="rrss__list">
                            <li className="li--card item2 supersecret">
                                <a href="#" className="link__icon__card link__icon__card-mail"> <i className="far fa-envelope card-icon"></i></a>
                            </li>
                            <li className="li--card item1 supersecret">
                                <a href="#" className="link__icon__card link__icon__card-phone"> <i className="fas fa-mobile-alt phone-icon"></i> </a>
                            </li>
                            <li className="li--card item3 supersecret">
                                <a href="#" className="link__icon__card link__icon__card-linkedin" target="blank"> <i className="fab fa-linkedin-in linkedin-icon"></i> </a>
                            </li>
                            <li className="li--card item4 supersecret">
                                <a href="#" className="link__icon__card link__icon__card-github" target="blank"> <i className="fab fa-github-alt github-icon"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPreview;