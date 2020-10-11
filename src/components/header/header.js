import React from 'react';

import Logo from './logo';
import styles from './header.module.css';

const Header = () => {
  const { header } = styles;

  return (
    <header className={header}>
      <Logo />
    </header>
  );
};

export default Header;
