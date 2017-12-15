import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../components/Header';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const AppView = props =>
  (
    <MuiThemeProvider>
      <div className="App">
        <Header />
        <main>
          <UserForm {...props} />
          <UserList {...props} />
        </main>
      </div>
    </MuiThemeProvider>
  );

export default AppView;
