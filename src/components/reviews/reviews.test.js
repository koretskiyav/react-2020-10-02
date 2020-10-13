import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import Review from './review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const review = reviews[1];
const { user, text, rating } = review;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });

  it('should render all stars', () => {
    const wrapper = mount(<Reviews reviews={[review]} />);
    expect(wrapper.find('[data-id="rate-star"]').length).toBe(5);
  });
  it('should render stars checked', () => {
    const wrapper = mount(<Reviews reviews={[review]} />);
    const checked = wrapper
      .find('[data-id="rate-star"]')
      .filterWhere((n) => n.props().checked);
    expect(checked.length).toBe(rating);
  });
  it('should render correct user-text', () => {
    const wrapper = mount(<Reviews reviews={[review]} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(text);
  });
  it('should render correct user-name', () => {
    const wrapper = mount(<Reviews reviews={[review]} />);
    expect(wrapper.find('[data-id="review-user-name"]').text()).toBe(user);
  });
  it('should render zero rating by default', () => {
    const wrapper = mount(<Review user={user} text={text} />);
    expect(
      wrapper
        .find('[data-id="review-rating"]')
        .filterWhere((n) => n.props().checked).length
    ).toBe(0);
  });
});
