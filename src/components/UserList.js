import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import User from '../components/User';

class UserList extends Component {
  static propTypes = {
    onDeleteUser: PropTypes.func.isRequired,
    onEditUser: PropTypes.func.isRequired,
    users: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  }

  handleChange = (event, id) => {
    this.props.onEditUser(id, event.target.name, event.target.value);
  };

  render() {
    const {
      users,
      onDeleteUser,
    } = this.props;

    return (
      <div>
        {users.size > 0 ?
          <List>
            <Subheader>User List</Subheader>
            {[...users.values()].reverse().map(user => (
              <User
                editUser={this.editUser}
                handleChange={this.handleChange}
                key={user.id}
                onDeleteUser={onDeleteUser}
                toggleEdit={this.toggleEdit}
                user={user}
              />
            ))}
          </List> : <div>There are no users</div>
        }
      </div>
    );
  }
}

export default UserList;
