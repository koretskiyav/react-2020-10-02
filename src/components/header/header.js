import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../context/user-context';
import Currency from '../currency';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Lena')}>
      <Logo />
      <Currency />
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
