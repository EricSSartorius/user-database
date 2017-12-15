import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './UserForm.css';

class UserForm extends PureComponent {
  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
  }

  state = {
    userData: this.getInitialState(),
    isInvalid: false,
  }

  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      address: '',
    };
  }

  addUser = () => {
    let isInvalid = false;
    Object.keys(this.state.userData).forEach((key) => {
      if (this.state.userData[key] === '') {
        isInvalid = true;
      }
    });

    if (isInvalid) {
      this.setState({ isInvalid: true });
    } else {
      this.props.onAddUser(this.state.userData);
      this.setState({ userData: this.getInitialState() });
      this.setState({ isInvalid: false });
    }
  }

  handleChange = (event) => {
    const dataType = event.target.name;

    this.setState({ userData: Object.assign({}, this.state.userData, { [dataType]: event.target.value }) });
  };

  render() {
    const { userData } = this.state;

    const inputStyle = {
      paddingLeft: '5px',
      width: '97%',
    };

    return (
      <Paper zDepth={2} className="user-form">
        <form onSubmit={e => e.preventDefault()} noValidate={!this.state.isInvalid}>
          <TextField
            name="firstName"
            value={userData.firstName}
            onChange={this.handleChange}
            hintText="First name"
            required
            underlineShow={false}
            style={inputStyle}
          />
          <Divider />
          <TextField
            name="lastName"
            value={userData.lastName}
            onChange={this.handleChange}
            hintText="Last name"
            required
            underlineShow={false}
            style={inputStyle}
          />
          <Divider />
          <TextField
            name="address"
            value={userData.address}
            onChange={this.handleChange}
            hintText="Address"
            required
            underlineShow={false}
            style={inputStyle}
          />
          <Divider />

          <RaisedButton
            label="Add User"
            primary
            type="submit"
            fullWidth
            onClick={this.addUser}
            buttonStyle={{ borderRadius: '0 0 2px 2px' }}
          />
        </form>
      </Paper>
    );
  }
}

export default UserForm;
