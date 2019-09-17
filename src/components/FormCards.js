import React from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import FormMain from './FormMain';
import FormFooter from './FormFooter';



class FormCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FormHeader />

                <FormMain
                    handleClickReset={this.props.handleClickReset}
                    avatar={this.props.avatar}
                    isAvatarDefault={this.props.isAvatarDefault}
                    updateAvatar={this.props.updateAvatar}
                    visible={this.props.visible}
                    changeCollap={this.props.changeCollap}
                    cardPalette={this.props.cardPalette}
                    cardName={this.props.cardName}
                    cardJob={this.props.cardJob}
                    cardEmail={this.props.cardEmail}
                    cardTelephone={this.props.cardTelephone}
                    cardLinkedin={this.props.cardLinkedin}
                    cardGithub={this.props.cardGithub}
                    handleChangeState={this.props.handleChangeState} />

                <FormFooter />

            </React.Fragment>
        );
    }
}

FormCards.propTypes = {
    handleClickReset: PropTypes.func.isRequired,
    avatar:PropTypes.string.isRequired,
    isAvatarDefault:PropTypes.bool.isRequired,
    updateAvatar: PropTypes.func.isRequired, 
    visible: PropTypes.object.isRequired,
    changeCollap: PropTypes.func.isRequired,
    cardPalette: PropTypes.number.isRequired,
    cardName: PropTypes.string.isRequired,
    cardJob: PropTypes.string.isRequired,
    cardEmail: PropTypes.string.isRequired,
    cardTelephone: PropTypes.string.isRequired,
    cardLinkedin: PropTypes.string.isRequired,
    cardGithub: PropTypes.string.isRequired,
    handleChangeState: PropTypes.func.isRequired,
}
export default FormCards;