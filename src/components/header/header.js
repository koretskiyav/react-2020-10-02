import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../context/user-context';
import { currencyContext } from '../../context/currency-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currency, setCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Lena')}>
      <h2 style={{ left: '20px' }}>
        Выберете валюту:
        <a
          href="/"
          onClick={(ev) => {
            ev.preventDefault();
            return setCurrency('USD');
          }}
        >
          $
        </a>
        <a
          href="/"
          onClick={(ev) => {
            ev.preventDefault();
            setCurrency('EUR');
          }}
        >
          €
        </a>
        <a
          href="/"
          onClick={(ev) => {
            ev.preventDefault();
            setCurrency('RUB');
          }}
        >
          ₽
        </a>
      </h2>
      <Logo />
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
