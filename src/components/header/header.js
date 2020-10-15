import React from 'react';

import Logo from './logo';
import Order from '../order';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Order />
  </header>
);

export default Header;
