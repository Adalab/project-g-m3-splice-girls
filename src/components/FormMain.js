import React from 'react';
import FormOption from './FormOption';
import FormPreview from './FormPreview';


class FormMain extends React.Component {
    render() {
        return (
            <main className="main__box">
                <div className="wrapper__box">

                    <FormOption handleChangeName={this.props.handleChangeName}/>
                    <FormPreview cardName = {this.props.cardName}/>

                </div>

            </main>



        );
    }
}

export default FormMain;