import React from 'react';
import ShoppingCart from './shopping_cart';
import Logo from './logo';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <ShoppingCart />
  </header>
);

export default Header;
