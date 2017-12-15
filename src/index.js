import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';
import UserActions from './data/UserActions';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();

/* Static data to give the feel of an app with users already in the database */
UserActions.addUser({
  firstName: 'Eric',
  lastName: 'Sartorius',
  address: '1563 Forest Hills Drive',
});

UserActions.addUser({
  firstName: 'John',
  lastName: 'Smith',
  address: '1234 Cool Street',
});
