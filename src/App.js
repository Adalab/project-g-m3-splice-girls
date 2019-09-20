import React from 'react';
import Landing from './Landing';
import FormCards from './components/FormCards';
import DefaultImage from './components/DefaultImage';
import {createdCard} from './services/Service';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAvatarDefault: true,
            userData: {
                photo: DefaultImage,
                palette: 1,
                name: '',
                job: '',
                email: '',
                phone: '',
                linkedin: '',
                github: '',
            },
            visible: {
                design: true,
                fill: false,
                share: false
            },
            cardURL:'',

        };
        this.updateAvatar = this.updateAvatar.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.changeCollap = this.changeCollap.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
        this.handleSendData = this.handleSendData.bind(this);
    }

    updateAvatar(img) {
        
        const {userData} = this.state;
        this.setState(prevState => {
            const newUserData = { ...userData, photo: img };
            return {
                userData: newUserData,
                isAvatarDefault: false
            }
        }, () => { this.handleSetLocalStorage() });
    }

    changeCollap(event) {
        const currentCollap = event.currentTarget.id;
        const prevStateVisible = this.state.visible[currentCollap];
        const newStateVisible = !prevStateVisible;
        this.setState(
            prevState => {
                if(newStateVisible === true){
                    const copiaVisible = {
                         design : false,
                         fill : false,
                         share: false
                     }
                     copiaVisible[currentCollap]= newStateVisible; 
                     return ({visible :{...prevState.visible,
                         design : copiaVisible.design,
                         fill : copiaVisible.fill,
                         share: copiaVisible.share
                     }})
                 } else { 
                     
                    return {visible:{...prevState.visible,[currentCollap] : newStateVisible}};
                     
                 } 
            }
        )
       
    };


    handleChangeState(event) {
        const atributo = event.currentTarget.name;
        let value = event.currentTarget.value;
        if (atributo === 'palette') {
            value = parseInt(value);
        }
        this.setState(prevState => {
            return { userData: { ...prevState.userData, [atributo]: value } }
        }, () => { this.handleSetLocalStorage(); }
        );
    }

    componentDidMount() {
        this.handleGetLocalStorage();
    }
    handleSetLocalStorage = () => {
        localStorage.setItem('userData', JSON.stringify(this.state.userData));
    }

    handleGetLocalStorage = () => {
        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        this.setState(()=>{
            if(savedUserData === null){
                return (console.log ('no tengo info guardada'))
            } else {
                return ({
                    userData: savedUserData
                })
            }
        })
    }

    handleClickReset(event) {
        this.setState(
            {
                isAvatarDefault: true,
                userData: {
                    photo: DefaultImage,
                    palette: 1,
                    name: '',
                    job: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    github: '',
                },
                visible: {
                    design: true,
                    fill: false,
                    share: false
                },

            }
        )
    }

    handleSendData() {
            createdCard(this.state.userData)       
            .then(data => {
                this.setState({cardURL : data.cardURL});
            });
    };


    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/cards'
                        render={() => <FormCards
                            handleClickReset={this.handleClickReset}
                            avatar={this.state.userData.photo}
                            isAvatarDefault={this.state.isAvatarDefault}
                            updateAvatar={this.updateAvatar}
                            visible={this.state.visible}
                            changeCollap={this.changeCollap}
                            cardPalette={this.state.userData.palette}
                            cardName={this.state.userData.name}
                            cardJob={this.state.userData.job}
                            cardEmail={this.state.userData.email}
                            cardTelephone={this.state.userData.phone}
                            cardLinkedin={this.state.userData.linkedin}
                            cardGithub={this.state.userData.github}
                            handleChangeState={this.handleChangeState}
                            handleSendData={this.handleSendData}
                            cardURL={this.state.cardURL}
                        />}
                    />
                </Switch>

            </React.Fragment>
        )

    }
}



export default App