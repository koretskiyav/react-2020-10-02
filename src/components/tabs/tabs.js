import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => {
  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, link }, index) => (
          <NavLink
            key={title}
            className={cn(styles.tab)}
            activeClassName={cn(styles.active)}
            to={link}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
