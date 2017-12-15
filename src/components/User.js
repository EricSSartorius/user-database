import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Paper from 'material-ui/Paper';

class User extends PureComponent {
  static propTypes = {
    onDeleteUser: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const {
      onDeleteUser,
      handleChange,
      user,
    } = this.props;

    return (
      <Paper zDepth={2}>
        <ListItem
          disabled
          key={user.id}
          rightIconButton={
            <IconButton onClick={() => onDeleteUser(user.id)}><Close /></IconButton>
          }
          primaryText={
            <div>
              <TextField
                name="firstName"
                value={user.firstName}
                onChange={e => handleChange(e, user.id)}
                // underlineStyle={{ borderColor: 'white' }}
              />
              <TextField
                name="lastName"
                value={user.lastName}
                onChange={e => handleChange(e, user.id)}
                underlineStyle={{ borderColor: 'white' }}
              />
              <TextField
                name="address"
                value={user.address}
                onChange={e => handleChange(e, user.id)}
                underlineStyle={{ borderColor: 'white' }}
              />
            </div>
          }
        />
      </Paper>
    );
  }
}

export default User;
