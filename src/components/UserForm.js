import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Welcome from './Welcome';
import FormAnimalDetails from './FormAnimalDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        city: '',
        type: '',
        bio: ''
    }
// precced to next step 

nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

// go back to prev step 

prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

//handle fields change

handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, number, city, type, bio } = this.state;
        const values = { firstName, lastName, email, number, city, type, bio };
        
        switch(step) {
            case 1: 
            return (
                <Welcome
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                />
            )
          case 2:
           return (
               <FormUserDetails
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={values}
               />
           )
           case 3:
           return <FormAnimalDetails
           nextStep={this.nextStep}
           prevStep={this.prevStep}
           handleChange={this.handleChange}
           values={values}
           />
           case 4:
           return <h1>Confirm</h1>
           case 5:
           return <h1>Success</h1>
           default:
           return <h1>Different Case!</h1>
        }
    }
}

export default UserForm