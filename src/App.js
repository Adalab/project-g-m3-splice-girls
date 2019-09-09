import React from 'react';
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
       });
       console.log (this.state);
    }
    
    render() {
        return (
            <FormCards handleChangeName={this.handleChangeName}/>
        )

    }
}
export default App