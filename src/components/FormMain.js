import React from 'react';
import FormOption from './FormOption';
import FormPreview from './FormPreview';

class FormMain extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FormOption/>
                <FormPreview/>
            </React.Fragment>
            
        );
    }
}

export default FormMain;