import React from 'react';
import PropTypes from 'prop-types';
import FormOptDesign from './FormOptDesign';
import FormOptFill from './FormOptFill';
import FormOptShare from './FormOptShare';

class FormOption extends React.Component {
    render() {
        const titulo = 'Diseña';
        return (
            <div className="options__box">
                <form className="create__card" action="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/" method="POST">
                    <FormOptDesign 
                    title={titulo} 
                    handleChangeState={this.props.handleChangeState} 
                    cardPalette={this.props.cardPalette} 
                    changeCollap={this.props.changeCollap} 
                    visible={this.props.visible}/>
                    <FormOptFill 
                    updateAvatar={this.props.updateAvatar} 
                    avatar={this.props.avatar}
                    isAvatarDefault={this.props.isAvatarDefault} 
                    handleChangeState={this.props.handleChangeState} 
                    changeCollap={this.props.changeCollap} 
                    visible = {this.props.visible} />
                    <FormOptShare 
                    handleChangeState={this.props.handleChangeState} 
                    changeCollap={this.props.changeCollap} 
                    visible = {this.props.visible} />
                </form>

            </div>



        );
    }
}

FormOption.propTypes= {
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

export default FormOption;