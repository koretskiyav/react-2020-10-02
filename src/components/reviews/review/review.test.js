import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';

import { restaurants } from '../../../fixtures';

const DEFAULT_USER_NAME = 'Anonymous';
const DEFAULT_TEXT = '';
const DEFAULT_RATING = 0;

const review = restaurants[0].reviews[0];
const { rating, text, user } = review;

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('Review should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('Review user name should be correct', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(user);
  });
  it('User should be marked as Anonymous if there is no name', () => {
    const wrapper = mount(<Review rating={rating} text={text} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(
      DEFAULT_USER_NAME
    );
  });
  it('Review text should be correct', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(text);
  });
  it('Review text should be empty if there is no text message', () => {
    const wrapper = mount(<Review rating={rating} user={user} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(DEFAULT_TEXT);
  });
  it('Review rating should be correct', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="checked-review-star"]').length).toBe(rating);
  });
  it('Review rating should be 0 by default', () => {
    const wrapper = mount(<Review user={user} text={text} />);
    expect(wrapper.find('[data-id="checked-review-star"]').length).toBe(
      DEFAULT_RATING
    );
  });
});
