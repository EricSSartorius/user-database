

// import { ReduceStore } from 'flux/utils';
// import UserActionTypes from './UserActionTypes';
// import UserDispatcher from './UserDispatcher';

// class UserEditStore extends ReduceStore {
//   constructor() {
//     super(UserDispatcher);
//   }

//   getInitialState() {
//     return '';
//   }

//   reduce(state, action) {
//     switch (action.type) {
//       case UserActionTypes.START_EDITING_USER:
//         console.log('START EDIT');
//         return action.id;

//       case UserActionTypes.STOP_EDITING_USER:
//         console.log('STOP EDIT');

//         return '';

//       default:
//         return state;
//     }
//   }
// }

// export default new UserEditStore();
