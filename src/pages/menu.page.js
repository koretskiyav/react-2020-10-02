import React from 'react';
import Menu from '../components/menu';
import Reviews from '../reviews';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';


function menuPage({ id, menu, reviews }) {

  return (
    <div>
      <NavLink
        to={`/restaurants/${id}/menu`}
        className={styles.tab}
        activeClassName={styles.active}
      >
        Menu
        </NavLink>
      <NavLink
        to={`/restaurants/${id}/reviews`}
        className={styles.tab}
        activeClassName={styles.active}
      >
        Reviews
        </NavLink>
      <Switch>
        <Route path={`/restaurants/${id}/menu`}>
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Route path={`/restaurants/${id}/reviews`}>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
        <Redirect from={`/restaurants/${id}`} to={`/restaurants/${id}/menu`} />
      </Switch>
    </div>
  )
}

// export default connect(
//   createStructuredSelector({
//     loading: productsLoadingSelector,
//     loaded: productsLoadedSelector,
//   }),
//   { loadProducts }
// )(menuPage);
