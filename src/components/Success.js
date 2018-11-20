import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

  continue = e => {
    e.preventDefault();
    //sending date for example to API
    this.props.nextStep();
  }
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Last step - Success"/>
          <h1>Thank You For Your Application!</h1>
        <h3>You will get an email with date od meeting</h3>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Success
