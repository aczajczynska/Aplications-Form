import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

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
    const { values: { firstName, lastName, email, number, city, type, bio } } = this.props;
    // this.props.values; same// 
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Conform User and Animal Data"/>
         <List>
             <ListItem
             primaryText="First Name" // label
             secondaryText={ firstName }
             />
             <ListItem
             primaryText="Last Name" // label
             secondaryText={ lastName }
             />
             <ListItem
             primaryText="Email" // label
             secondaryText={email}
             />
             <ListItem
             primaryText="Phone Number" // label
             secondaryText={number}
             />
             <ListItem
             primaryText="City Animal Shelter" // label
             secondaryText={city}
             />
             <ListItem
             primaryText="Type of pet " // label
             secondaryText={ type }
             />
             <ListItem
             primaryText="Bio" // label
             secondaryText={ bio }
             />
         </List>
         <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
          />
          <RaisedButton
          label="Confirm"
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

export default FormUserDetails
