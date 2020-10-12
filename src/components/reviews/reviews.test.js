import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import Review from './review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-set="reviews"]').length).toBe(1);
  });
  it('should contains proper amount of reviews', () => {
    const amountOfReviews = reviews.length;
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find(Review).length).toBe(amountOfReviews);
  });
  it('check no reviews case', () => {
    const wrapper = mount(<Reviews reviews={[]} />);
    expect(wrapper.find(Review).length).toBe(0);
  });
});
