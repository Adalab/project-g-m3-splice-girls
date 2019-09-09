import React from 'react';
import FormHeader from './FormHeader';
import FormMain from './FormMain';
import FormFooter from './FormFooter';


class FormCards extends React.Component {
    render () {
        return (
            <React.Fragment>
                <FormHeader/>

                <FormMain handleChangeName={this.props.handleChangeName}/>

                <FormFooter/>
                
            </React.Fragment>
        );
    }
} 


export default FormCards;