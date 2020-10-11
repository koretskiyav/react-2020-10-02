import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('user name is correct', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-name"]').text()).toBe(review.user);
  });
  it('text is correct', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-comment"]').text()).toBe(review.text);
  });
  it('rate is correct', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-star-checked"]').length).toBe(
      review.rating
    );
  });
  it('show default name', () => {
    const wrapper = mount(<Review />);
    expect(wrapper.find('[data-id="review-name"]').text()).toBe('Anonymous');
  });
  it('show default text', () => {
    const wrapper = mount(<Review />);
    expect(wrapper.find('[data-id="review-comment"]').text()).toBe('');
  });
  it('show default rating', () => {
    const wrapper = mount(<Review />);
    expect(wrapper.find('[data-id="review-star-checked"]').length).toBe(5);
  });
});
