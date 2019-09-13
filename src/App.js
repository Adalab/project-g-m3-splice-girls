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
        }   
        };

        this.handleChangeState = this.handleChangeState.bind(this);
    }

    handleChangeState(event) {
        const atributo = event.currentTarget.name;
       
        const value = event.currentTarget.value;
        
      
        // const{name}=this.state.userData;
        // console.log(name);

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