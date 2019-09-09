import React from 'react';
import PropTypes from 'prop-types';
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

FormMain.propTypes= {
  handleChangeName: PropTypes.func,  
  cardName: PropTypes.string,
}

export default FormMain;