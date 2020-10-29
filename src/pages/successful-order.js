import React from 'react';
import { clearOrder } from '../redux/actions';
import { connect } from 'react-redux';

class SuccessfulOrder extends React.Component {
  componentDidMount() {
    this.props.clearOrder();
  }

  render() {
    return <h4>Спасибо за заказ!</h4>;
  }
}

export default connect(null, { clearOrder })(SuccessfulOrder);
