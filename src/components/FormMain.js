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
                        cardGithub={this.props.cardGithub} />
                    <FormPreview
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
    
    avatar:PropTypes.string,
    isAvatarDefault:PropTypes.bool,
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

export default FormMain;