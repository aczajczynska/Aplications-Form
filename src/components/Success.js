import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {

  backToOne = e => {
    e.preventDefault();
    this.props.stepOne();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Last step - Success"/>
          <h1>Thank You For Your Application!</h1>
        <h3>You will get an email with date od meeting</h3>
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.backToOne}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
    button: {
      margin: 15
    }
  }

export default Success
