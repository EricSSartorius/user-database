import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import UserData from './UserData';
import UserActionTypes from './UserActionTypes';
import UserDispatcher from './UserDispatcher';

class UserStore extends ReduceStore {
  constructor() {
    super(UserDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case UserActionTypes.ADD_USER:
        if (!action.data.firstName || !action.data.lastName || !action.data.address) {
          return state;
        }

        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

        return state.set(id, new UserData({
          id,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          address: action.data.address,
        }));

      case UserActionTypes.DELETE_USER:
        return state.delete(action.id);

      case UserActionTypes.EDIT_USER:
        return state.setIn([action.id, action.name], action.data);

      default:
        return state;
    }
  }
}

export default new UserStore();