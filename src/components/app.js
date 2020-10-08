import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Restaurants restaurants={this.props.restaurants} />
          </div>
        </div>
      </div>
    );
  }
}
