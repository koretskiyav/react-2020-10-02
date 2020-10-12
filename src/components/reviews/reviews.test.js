import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render review', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBeGreaterThanOrEqual(0);
  });

  it('should have reviews only with rate 0<=x<=5', () => {
    const wrongRates = reviews.filter(
      (review) => !review.rating || review.rating > 5 || review.rating < 0
    ).length;
    expect(wrongRates).toBe(0);
  });

  it('should have rate 0<=x<=5', () => {
    const rating =
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    expect(rating).toBeWithinRange(0, 5);
  });
});
