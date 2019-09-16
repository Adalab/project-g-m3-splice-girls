import React from 'react';
// import PropTypes from 'prop-types';

//import Landing from './Landing';
import FormCards from './components/FormCards';
import DefaultImage from './DefaultImage';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        isAvatarDefault: true,
        userData : {
            avatar: DefaultImage,
            palette: '1',
            name: '',
            job: '',
            email:'',
            telephone:'',
            linkedin:'',
            github:'', 
        },
        visible : {
            design : true,
            fill : false,
            share: false},
          
        };
        this.updateAvatar = this.updateAvatar.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.changeCollap = this.changeCollap.bind(this);
    }

    updateAvatar(img) {
        const {userData} = this.state;
        this.setState(prevState => {
          const newUserData = {...userData, avatar: img};
          return {
            userData: newUserData,
            isAvatarDefault: false
          }
        });
      }

    changeCollap (event) {
        const currentCollap = event.currentTarget.id;
        const prevStateVisible = this.state.visible[currentCollap];
        const newStateVisible = !prevStateVisible;
        //const copiaVisible = {...this.state.visible};
        //console.log(copiaVisible)
        if(newStateVisible === true){
           const copiaVisible = {
                design : false,
                fill : false,
                share: false}
            copiaVisible[currentCollap]=newStateVisible; 
            //console.log(copiaVisible)
            this.setState({visible : {design : copiaVisible.design,
                fill : copiaVisible.fill,
                share: copiaVisible.share},
                })
        } else { 
            this.setState ({
                   visible: {...this.state.visible,[currentCollap] : !this.state.visible[currentCollap]},
                 
                }
                )
        }
        };


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

            avatar={this.state.userData.avatar} 
            isAvatarDefault={this.state.isAvatarDefault} 
            updateAvatar={this.updateAvatar}       
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