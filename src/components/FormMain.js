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
                        handleChangeState={this.props.handleChangeState}
                        cardPalette={this.props.cardPalette}
                        cardName={this.props.cardName}
                        cardJob={this.props.cardJob}
                        cardEmail={this.props.cardEmail}
                        cardTelephone={this.props.cardTelephone}
                        cardLinkedin={this.props.cardLinkedin}
                        cardGithub={this.props.cardGithub} />
                    <FormPreview
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