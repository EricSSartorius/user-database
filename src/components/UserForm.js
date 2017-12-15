import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserForm extends PureComponent {
  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
  }

  state = {
    userData: this.getInitialState(),
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
        console.log(isInvalid);
      }
    });

    if (!isInvalid) {
      this.props.onAddUser(this.state.userData);
      this.setState({ userData: this.getInitialState() });
    }
  }

  handleChange = (event) => {
    const dataType = event.target.name;

    this.setState({ userData: Object.assign({}, this.state.userData, { [dataType]: event.target.value }) });
  };

  render() {
    const { userData } = this.state;

    return (
      <Paper zDepth={2}>
        <form onSubmit={e => e.preventDefault()}>
          <TextField
            name="firstName"
            value={userData.firstName}
            onChange={this.handleChange}
            hintText="First name"
            required
            fullWidth
            underlineShow={false}
          />
          <Divider />
          <TextField
            name="lastName"
            value={userData.lastName}
            onChange={this.handleChange}
            hintText="Last name"
            fullWidth
            required
            underlineShow={false}
          />
          <Divider />
          <TextField
            name="address"
            value={userData.address}
            onChange={this.handleChange}
            hintText="Address"
            required
            fullWidth
            underlineShow={false}
          />
          <Divider />

          <RaisedButton
            label="Add User"
            primary
            type="submit"
            fullWidth
            onClick={this.addUser}
          />
        </form>
      </Paper>
    );
  }
}

export default UserForm;
