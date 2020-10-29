import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import { userContext } from '../../context/user-context';
import { currencyContext } from '../../context/currency-context';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currencies, currency, setCurrency } = useContext(currencyContext);

  const currencyChange = () => {
    // eslint-disable-next-line
    setCurrency(currencies[event.target.value]);
  };

  return (
    <header className={styles.header} onClick={() => setName('Lena')}>
      <Logo />
      <h2>{name}</h2>
      <select onChange={() => currencyChange()}>
        {Object.values(currencies).map((cur) => (
          <option key={cur.id}>{cur.code}</option>
        ))}
      </select>
    </header>
  );
};

export default Header;
