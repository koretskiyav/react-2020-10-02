import React, { PureComponent } from 'react';
import cls from './app.module.scss';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div className={cls.content}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
