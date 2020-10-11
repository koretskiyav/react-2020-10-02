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
  it('quantity reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });
  it('check text without reviews', () => {
    const wrapper = mount(<Reviews reviews={[]} />);
    expect(wrapper.find('[data-id="without-reviews"]').text()).toBe(
      'Be the first who reviewed this restaurant!'
    );
  });
});
