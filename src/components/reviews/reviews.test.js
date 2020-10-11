import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import Review from './review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const anotherReviews = restaurants[1].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.exists('[data-id="reviews"]')).toBe(true);
    expect(wrapper.name()).toBe('ReviewsComponent');
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.props().reviews).toBe(reviews);

    wrapper.setProps({ reviews: anotherReviews });
    expect(wrapper.props('reviews')).toStrictEqual({ reviews: anotherReviews });
  });

  it('renders children', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find(Review).length).toBe(2);

    const children = reviews.map((review) => (
      <Review key={review.id} {...review} />
    ));
    expect(wrapper.contains(children)).toBe(true);

    expect(
      wrapper
        .find(Review)
        .map((childWrapper) => childWrapper.props().id)
        .join('|')
    ).toBe(reviews.map(({ id }) => id).join('|'));

    expect(wrapper.find(Review).get(1).props.user).toBe('Sam');
  });

  it('renders nothing', () => {
    const wrapper = mount(<Reviews reviews={[]} />);
    expect(wrapper.find(Review).length).toBe(0);
    expect(wrapper.find(Review).exists()).toBe(false);
  });
});
