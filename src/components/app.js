import React, { PureComponent } from 'react';
import Restaurants from './restaurants';
import style from './app.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className={style.app}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
