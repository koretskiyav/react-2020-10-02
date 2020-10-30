import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../context/user-context';
import Button from '../button';
import { currencyContext } from '../../context/currency-contex';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currency, shortConvert, nextCurrency } = useContext(currencyContext);
  return (
    <header className={styles.header} onClick={() => setName('Lena')}>
      <Button onClick={() => nextCurrency()}>{currency.sign}</Button>
      <Logo />
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
