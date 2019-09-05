import React from 'react';
import FormHeader from './FormHeader';
import FormMain from './FormMain';
import FormFooter from './FormFooter';

class FormCards extends React.Component {
    render () {
        return (
            <React.Fragment>
                <FormHeader/>
                <FormMain/>
                <FormFooter/>
            </React.Fragment>
        );
    }
} 


export default FormCards;