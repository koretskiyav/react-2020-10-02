import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const review = reviews[1];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });

  it('should render 5 stars', () => {
    const wrapper = mount(<Reviews reviews={[review]} />);
    expect(wrapper.find('[data-id="rate-star"]').length).toBe(5);
  });
  it('sould render 3 stars checked', () => {
    const wrapper = mount(<Reviews reviews={[review]} />);
    const checked = wrapper
      .find('[data-id="rate-star"]')
      .filterWhere((n) => n.props().checked);
    expect(checked.length).toBe(3);
  });
});
