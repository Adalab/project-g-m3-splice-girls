import React from 'react';
import FormOptDesign from './FormOptDesign';
import FormOptFill from './FormOptFill';
import FormOptShare from './FormOptShare';

class FormOption extends React.Component {
    render() {
        const titulo = 'Diseña';
        return (
            <div className="options__box">
                <form className="create__card" action="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/" method="POST">
                    <FormOptDesign title={titulo} />
                    <FormOptFill handleChangeName={this.props.handleChangeName}/>
                    <FormOptShare />
                </form>

            </div>



        );
    }
}


export default FormOption;