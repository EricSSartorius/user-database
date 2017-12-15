import UserDispatcher from './UserDispatcher';
import UserActionTypes from './UserActionTypes';

const Actions = {
  addUser(data) {
    UserDispatcher.dispatch({
      type: UserActionTypes.ADD_USER,
      data,
    });
  },

  deleteUser(id) {
    UserDispatcher.dispatch({
      type: UserActionTypes.DELETE_USER,
      id,
    });
  },

  editUser(id, name, data) {
    UserDispatcher.dispatch({
      type: UserActionTypes.EDIT_USER,
      id,
      name,
      data,
    });
  },
};

export default Actions;
