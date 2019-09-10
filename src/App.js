import React from 'react';
// import PropTypes from 'prop-types';
//import Landing from './Landing';
import FormCards from './components/FormCards';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            palette: 'palette1',
            name: '',
            job: '',
            email:'',
            telephone:'',
            linkedin:'',
            github:'', 
        };

        this.handleChangeState = this.handleChangeState.bind(this);
    }

    handleChangeState(event) {
        const atributo = event.currentTarget.name;
       
        const value = event.currentTarget.value;
        
        this.setState({
            [atributo]: value
        }, () => {
            
        });
    }

    render() {
        return (
            <FormCards 
            cardPalette={this.state.palette}
            cardName={this.state.name} 
            cardJob={this.state.job}
            cardEmail={this.state.email}
            cardTelephone={this.state.telephone}
            cardLinkedin={this.state.linkedin} 
            cardGithub={this.state.github}
            handleChangeState={this.handleChangeState} 
            />
        )

    }
}



export default App