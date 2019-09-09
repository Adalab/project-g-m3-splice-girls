import React from 'react';

class FormOptFill extends React.Component {
    render() {
        return (
            <fieldset className="fill--card">
                <legend className="hidden">rellena</legend>
                <h2 className="fill__title js__title--form">rellena</h2>
                <div className="fill__form drop-down">
                    <div className="fill__box--name">
                        <label className="fill_name" htmlFor="name">nombre completo</label>
                        <input className="field__fill field__fill-name" type="text" name="name" placeholder="Ej: Sally Jill" id="firstName" onChange={this.props.handleChangeName} required/>
                    </div>

                    <div className="fill__box--job">
                        <label className="fill_job" htmlFor="job">puesto</label>
                        <input className="field__fill field__fill-job" type="text" name="job" placeholder="Ej: Front-end unicorn" id="job_position" required />
                    </div>

                    <div className="fill__box--photo">
                        <label className="fill_photo" htmlFor="photo">imagen de perfil</label>
                        <input className="hidden js__profile-upload-btn" type="file" name="photo" id="photo" required />
                        <div className="photo__button-preview">
                            <button className="photo__button js__profile-trigger" type="button">añadir imagen</button>
                            <div className="photo__preview js__profile-preview"></div>
                        </div>
                    </div>

                    <div className="fill__box--email">
                        <label className="fill_email" htmlFor="email">email</label>
                        <input className="field__fill field__fill-icon input--email" type="email" name="email" placeholder="Ej: sally-hill@gmail.com" id="email_account" required />
                    </div>
                    <div className="fill__box--phone">
                        <label className="fill_phone" htmlFor="telephone">teléfono</label>
                        <input className="field__fill field__fill-icon input--phone" type="tel" name="telephone" placeholder="Ej: 555-55-55-55" id="telephone" />
                    </div>
                    <div className="fill__box--linkedin">
                        <label className="fill_linkedin" htmlFor="linkedin">linkedin</label>
                        <input className="field__fill field__fill-icon input--linkedin" type="text" name="linkedin" placeholder="Ej: sally-hill" id="linkedin" required />
                    </div>
                    <div className="fill__box--github">
                        <label className="fill_github" htmlFor="github">github</label>
                        <input className="field__fill field__fill-icon input--github" type="text" name="github" placeholder="Ej: sally-hill" id="github" required />
                    </div>
                </div>
            </fieldset>

        );
    }
}

export default FormOptFill;