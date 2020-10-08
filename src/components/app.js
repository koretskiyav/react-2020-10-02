import React, { PureComponent } from 'react';
import Restaurants from './restaurants';
import '../css/style.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className='root'>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
