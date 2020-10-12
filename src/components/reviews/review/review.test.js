import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render right data', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(review.user);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);
    expect(wrapper.find('[data-id="star-checked"]').length).toBe(review.rating);
  });
  it('default data should render if props are missed', () => {
    const reviewWithoutUserAndText = { rating: 3 };

    const wrapper = mount(<Review {...reviewWithoutUserAndText} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Anonymous');
    expect(wrapper.find('[data-id="review-text"]').text()).toBe('');
  });
  it('create review without rating throws error', () => {
    const reviewWithoutRating = { user: 'Petya', text: 'good' };

    console.error = jest.fn();
    React.createElement(Review, { ...reviewWithoutRating });
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
