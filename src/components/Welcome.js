import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Welcome extends Component {

    continueToAdopt = e => {
         e.preventDefault();
         this.props.nextStep();
    }

  render() {
      
    return (
        <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Click button and fill Form to Adopt Pet"/>
          <RaisedButton
          label="Click to find friend"
          style={styles.button}
          primary={true}
          onClick={this.continueToAdopt}
          />
          </React.Fragment>
          </MuiThemeProvider>
    )
  }
}

const styles ={
    button: {
        margin:15
    }
}

export default Welcome
