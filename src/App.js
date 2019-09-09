import React from 'react';
// import PropTypes from 'prop-types';
//import Landing from './Landing';
import FormCards from './components/FormCards';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(event){
       const value = event.currentTarget.value;
       console.log (value);
       this.setState({
           name: value
       }, ()=> {
        console.log (this.state);
       });
    }
    
    render() {
        return (
            <FormCards cardName = {this.state.name} handleChangeName={this.handleChangeName}/>
        )

    }
}



export default App