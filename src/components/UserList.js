import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import User from '../components/User';

import './UserList.css';

class UserList extends Component {
  static propTypes = {
    onDeleteUser: PropTypes.func.isRequired,
    onEditUser: PropTypes.func.isRequired,
    users: ImmutablePropTypes.orderedMap.isRequired,
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
      <div className="list-container">
        {users.size > 0 ?
          <List>
            <Subheader>List of Users</Subheader>
            {[...users.values()].reverse().map(user => (
              <User
                handleChange={this.handleChange}
                key={user.id}
                onDeleteUser={onDeleteUser}
                toggleEdit={this.toggleEdit}
                user={user}
              />
            ))}
          </List> : <div className="no-user">Use the form above to add a user</div>
        }
      </div>
    );
  }
}

export default UserList;
