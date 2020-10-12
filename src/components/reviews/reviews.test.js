import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render reviews component', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should render all reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });

  it("should render reviewer's name", () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="user-name"]').first().text()).toBe(
      reviews[0].user
    );
  });
  it("should render review's text", () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review-text"]').first().text()).toBe(
      reviews[0].text
    );
  });
  it('should render correct amount of stars', () => {
    const i = 1;
    const wrapper = mount(<Reviews reviews={reviews} />);
    console.log('STARS: ');
    console.log(
      wrapper
        .find('[data-id="review"]')
        .at(i)
        .children()
        .find('[data-id="checked-star"]').length
    );
    expect(
      wrapper
        .find('[data-id="review"]')
        .at(i)
        .children()
        .find('[data-id="checked-star"]').length
    ).toBe(reviews[i].rating);
  });
  it("should render reviewer's name for undefined user", () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="user-name"]').last().text()).toBe(
      'Anonymous'
    );
  });
});
