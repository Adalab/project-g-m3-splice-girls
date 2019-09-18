import React from 'react';
import PropTypes from 'prop-types';
import FormOption from './FormOption';
import FormPreview from './FormPreview';


class FormMain extends React.Component {
    render() {
        return (
            <main className="main__box">
                <div className="wrapper__box">

                    <FormOption
                        avatar={this.props.avatar}
                        isAvatarDefault={this.props.isAvatarDefault}
                        updateAvatar={this.props.updateAvatar}
                        visible={this.props.visible}
                        changeCollap={this.props.changeCollap}
                        handleChangeState={this.props.handleChangeState}
                        cardPalette={this.props.cardPalette}
                        cardName={this.props.cardName}
                        cardJob={this.props.cardJob}
                        cardEmail={this.props.cardEmail}
                        cardTelephone={this.props.cardTelephone}
                        cardLinkedin={this.props.cardLinkedin}
                        cardGithub={this.props.cardGithub} 
                        handleSendData={this.props.handleSendData}/>
                    <FormPreview
                        handleClickReset={this.props.handleClickReset}
                        avatar={this.props.avatar}
                        cardPalette={this.props.cardPalette}
                        cardName={this.props.cardName}
                        cardJob={this.props.cardJob}
                        cardEmail={this.props.cardEmail}
                        cardTelephone={this.props.cardTelephone}
                        cardLinkedin={this.props.cardLinkedin}
                        cardGithub={this.props.cardGithub}

                    />

                </div>

            </main>



        );
    }
}

FormMain.propTypes = {
    handleClickReset: PropTypes.func.isRequired,
    avatar:PropTypes.string.isRequired,
    isAvatarDefault:PropTypes.bool.isRequired,
    updateAvatar: PropTypes.func.isRequired, 
    visible: PropTypes.object.isRequired,
    changeCollap: PropTypes.func.isRequired,
    handleChangeState: PropTypes.func.isRequired,
    cardPalette: PropTypes.number.isRequired,
    cardName: PropTypes.string.isRequired,
    cardJob: PropTypes.string.isRequired,
    cardEmail: PropTypes.string.isRequired,
    cardTelephone: PropTypes.string.isRequired,
    cardLinkedin: PropTypes.string.isRequired,
    cardGithub: PropTypes.string.isRequired,
    handleSendData: PropTypes.func.isRequired
}

export default FormMain;