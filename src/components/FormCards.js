import React from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import FormMain from './FormMain';
import FormFooter from './FormFooter';


class FormCards extends React.Component {
    render () {
        return (
            <React.Fragment>
                <FormHeader/>

                <FormMain  cardName = {this.props.cardName} handleChangeName={this.props.handleChangeName}/>

                <FormFooter/>
                
            </React.Fragment>
        );
    }
} 

FormCards.propTypes = {
    cardName: PropTypes.string,
    handleChangeName: PropTypes.func,
}
export default FormCards;