import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });
  it('should init from 2 amount', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('2');
  });
  it('should increment amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('3');
  });
  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });

  it('should decrement amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });

  it('should not decrement below zero', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });

  it('should update amount (using jest spy)', () => {
    const setState = jest.fn();

    jest
      .spyOn(React, 'useState')
      .mockImplementation((init) => [init, setState]);

    const wrapper = shallow(<Product product={product} />);

    wrapper.props().increment();
    expect(setState).toHaveBeenCalledWith(3);

    wrapper.props().decrement();
    expect(setState).toHaveBeenCalledWith(1);
  });
});
