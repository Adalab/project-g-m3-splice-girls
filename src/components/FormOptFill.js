import React from 'react';
import GetAvatar from './GetAvatar';
import PropTypes from 'prop-types';


class FormOptFill extends React.Component {
    render() {
        let h2Classname = "fill__title js__title--form";
        if (this.props.visible.fill ){
            h2Classname ="fill__title js__title--form fill__title2";
        }
        return (
            <fieldset className="fill--card">
                <legend className="hidden">rellena</legend>
                <h2 className={h2Classname} id="fill" onClick={this.props.changeCollap} >rellena</h2>
                {!this.props.visible.fill ||
                <div className="fill__form drop-down">
                    <div className="fill__box--name">
                        <label className="fill_name" htmlFor="name">nombre completo</label>
                        <input className="field__fill field__fill-name" value={this.props.cardName} type="text" name="name" placeholder="Ej: Sally Jill" id="firstName" onChange={this.props.handleChangeState} required/>
                    </div>

                    <div className="fill__box--job">
                        <label className="fill_job" htmlFor="job">puesto</label>
                        <input className="field__fill field__fill-job" value={this.props.cardJob} type="text" name="job" placeholder="Ej: Front-end unicorn" id="job_position" onChange={this.props.handleChangeState} required />
                    </div>
                        <GetAvatar  
                        updateAvatar={this.props.updateAvatar} 
                        avatar={this.props.userData.avatar}
                        isAvatarDefault={this.props.isAvatarDefault} />
                    {/* <div className="fill__box--photo">
                        <label className="fill_photo" htmlFor="photo">imagen de perfil</label>
                        <input className="hidden js__profile-upload-btn" type="file" name="photo" id="photo" required />
                        <div className="photo__button-preview">
                            <button className="photo__button js__profile-trigger" type="button">añadir imagen</button>
                            <div className="photo__preview js__profile-preview"></div>
                        </div>
                    </div> */}

                    <div className="fill__box--email">
                        <label className="fill_email" htmlFor="email" >email</label>
                        <input className="field__fill field__fill-icon input--email" value={this.props.cardEmail} type="email" name="email" placeholder="Ej: sally-hill@gmail.com" id="email_account" onChange={this.props.handleChangeState} required />
                    </div>
                    <div className="fill__box--phone">
                        <label className="fill_phone" htmlFor="telephone">teléfono</label>
                        <input className="field__fill field__fill-icon input--phone" value={this.props.cardTelephone} type="tel" name="telephone" placeholder="Ej: 555-55-55-55" id="telephone" onChange={this.props.handleChangeState} />
                    </div>
                    <div className="fill__box--linkedin">
                        <label className="fill_linkedin" htmlFor="linkedin">linkedin</label>
                        <input className="field__fill field__fill-icon input--linkedin" value={this.props.cardLinkedin} type="text" name="linkedin" placeholder="Ej: sally-hill" id="linkedin" onChange={this.props.handleChangeState} required />
                    </div>
                    <div className="fill__box--github">
                        <label className="fill_github" htmlFor="github">github</label>
                        <input className="field__fill field__fill-icon input--github"value={this.props.cardGithub} type="text" name="github" placeholder="Ej: sally-hill" id="github" onChange={this.props.handleChangeState} required />
                    </div>
                </div>}
            </fieldset>

        );
    }
}
FormOptFill.propTypes= {
    
    avatar:PropTypes.string,
    isAvatarDefault:PropTypes.string,
    updateAvatar: PropTypes.func, 
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


export default FormOptFill;