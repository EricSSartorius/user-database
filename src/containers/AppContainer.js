import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import UserActions from '../data/UserActions';
import UserStore from '../data/UserStore';

function getStores() {
  return [
    UserStore,
  ];
}

function getState() {
  return {
    users: UserStore.getState(),

    onAddUser: UserActions.addUser,
    onDeleteUser: UserActions.deleteUser,
    onEditUser: UserActions.editUser,
  };
}

export default Container.createFunctional(AppView, getStores, getState);
