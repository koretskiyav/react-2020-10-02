import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../context/user-context';
import Currencies from './currencies';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Lena')}>
      <Currencies />
      <Logo />
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
