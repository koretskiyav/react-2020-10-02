import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should decrement amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-amount"]').simulate('click');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
});
