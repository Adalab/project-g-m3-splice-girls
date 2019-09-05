import React from 'react';
import FormOptDesign from './FormOptDesign';
import FormOptFill from './FormOptFill';
import FormOptShare from './FormOptShare';

class FormOption extends React.Component {
    render(){
        const titulo = 'Diseña';
        return(
            <React.Fragment>
                <FormOptDesign title = {titulo}/>
                <FormOptFill/>
                <FormOptShare/>
            </React.Fragment>

        );
    }
}


export default FormOption;