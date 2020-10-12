import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import Rate from '../../rate';

import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Review {...review} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    expect(wrapper.exists('[data-id="review"]')).toBe(true);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);

    expect(wrapper.exists('[data-id="review-content"]')).toBe(true);
    expect(wrapper.find('[data-id="review-content"]').length).toBe(1);

    expect(wrapper.exists('[data-id="review-user"]')).toBe(true);
    expect(wrapper.find('[data-id="review-user"]').length).toBe(1);

    expect(wrapper.exists('[data-id="review-text"]')).toBe(true);
    expect(wrapper.find('[data-id="review-text"]').length).toBe(1);

    expect(wrapper.exists('[data-id="review-rate"]')).toBe(true);
    expect(wrapper.find('[data-id="review-rate"]').length).toBe(1);
  });

  it('has correct contents', () => {
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(review.user);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);

    expect(wrapper.find('[data-id="review-rate"]').find(Rate).exists()).toBe(
      true
    );
    expect(wrapper.find('[data-id="review-rate"]').find(Rate).length).toBe(1);
  });
});
