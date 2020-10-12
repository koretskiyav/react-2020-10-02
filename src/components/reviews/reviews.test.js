import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';
import Review from './review';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should contain 2 reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find(Review)).toHaveLength(2);
  });
});
