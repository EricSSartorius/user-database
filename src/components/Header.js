import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () =>
  (
    <header>
      <AppBar
        title="User Database"
        style={{ position: 'fixed' }}
        showMenuIconButton={false}
      />
    </header>
  );

export default Header;
