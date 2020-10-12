import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should render all items in every componet "reviews"', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });
  it('should render all items in the first "reviews"', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });
});
