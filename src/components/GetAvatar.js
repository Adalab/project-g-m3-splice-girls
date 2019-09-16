import React, { Component } from "react";
import './GetAvatar.css';
import PropTypes from 'prop-types';

class GetAvatar extends Component {
    constructor(props) {
        super(props);

        this.fr = new FileReader();
        this.myFileField = React.createRef();

        this.handleFilePicker = this.handleFilePicker.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    handleFilePicker() {
        this.myFileField.current.click();
    }

    uploadImage(e) {
        const myFile = e.currentTarget.files[0];
        this.fr.addEventListener('load', this.getImage);
        this.fr.readAsDataURL(myFile);
    }

    getImage() {
        const image = this.fr.result;
        this.props.updateAvatar(image);
    }

    getPreview(isDefault, image) {
        return (!isDefault) ? { backgroundImage: `url(${image})` } : {};
    }

    render() {
        const { isAvatarDefault, avatar } = this.props;
        return (
            <div className="fill__box--photo">
                <label className="fill_photo" htmlFor="photo">imagen de perfil</label>
                <input className="hidden " type="file" ref={this.myFileField} name="photo" id="photo" onChange={this.uploadImage} required />
                <div className="photo__button-preview">
                    <button className="photo__button " type="button" onClick={this.handleFilePicker}>añadir imagen</button>
                    <div className="photo__preview" style={this.getPreview(isAvatarDefault, avatar)}></div>
                </div>
            </div>
        );
    }
}





GetAvatar.propTypes = {
    isAvatarDefault: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    updateAvatar: PropTypes.func.isRequired
};

export default GetAvatar;

