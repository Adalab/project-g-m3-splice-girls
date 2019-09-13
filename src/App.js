import React from 'react';
// import PropTypes from 'prop-types';

//import Landing from './Landing';
import FormCards from './components/FormCards';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        userData : {
            palette: '1',
            name: '',
            job: '',
            email:'',
            telephone:'',
            linkedin:'',
            github:'', 
        },
        visible : false,
        selectedCollap: ''   
        };

        this.handleChangeState = this.handleChangeState.bind(this);
        this.changeCollap = this.changeCollap.bind(this);
    }
    changeCollap (event) {
        const currentCollap = event.currentTarget.id;
        console.log(currentCollap);
               this.setState ({
            visible: !this.state.visible,
            selectedCollap: currentCollap
        }
        );
    }

    handleChangeState(event) {
        const atributo = event.currentTarget.name;
        const value = event.currentTarget.value;
        
        this.setState(
            
          prevState => {
              return {userData: {...prevState.userData, [atributo] : value}}
          }  
            );
    }

    render() {
        return (
            //<Landing></Landing>
        
            <FormCards 
            selectedCollap={this.state.selectedCollap}
            visible={this.state.visible}
            changeCollap={this.changeCollap}
            cardPalette={this.state.userData.palette}
            cardName={this.state.userData.name} 
            cardJob={this.state.userData.job}
            cardEmail={this.state.userData.email}
            cardTelephone={this.state.userData.telephone}
            cardLinkedin={this.state.userData.linkedin} 
            cardGithub={this.state.userData.github}
            handleChangeState={this.handleChangeState} 
            />
        )

    }
}



export default App