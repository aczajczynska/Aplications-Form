import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormAnimalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    // this.props.values; same// 
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Animal Details"/>
          <TextField
          hintText="Enter City Animal Shelter" // placeholder
          floatingLabelText="City" //label
          onChange={handleChange('city')}
          defaultValue={values.city}
          />
          <br/>
          <TextField
          hintText="Enter Type of Pet"
          floatingLabelText="Type"
          onChange={handleChange('type')}
          defaultValue={values.type}
          />
          <br/>
          <TextField
          hintText="Enter Bio"
          floatingLabelText="Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
          />
          <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
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

export default FormAnimalDetails
