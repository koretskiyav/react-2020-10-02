import React, { useContext } from 'react';

import Logo from './logo';
import CurrencySwitch from '../currency-switch';
import styles from './header.module.css';
import { userContext } from '../../context/user-context';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Lena')}>
      <Logo />
      <CurrencySwitch />
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
