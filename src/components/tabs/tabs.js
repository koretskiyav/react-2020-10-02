import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const { content } = tabs[activeTab];
  const { restaurantId } = tabs[activeTab].content.props;

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }, index) => (
          <NavLink
            key={title}
            to={`/restaurants/${restaurantId}/${title}`}
            className={cn(styles.tab, { [styles.active]: index === activeTab })}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </NavLink>
        ))}
      </div>
      {content}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
