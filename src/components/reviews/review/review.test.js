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
  it('should display username', () => {
    const userName = review.user;
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="name"]').text()).toBe(userName);
  });
  it('should display default username', () => {
    const wrapper = mount(<Review text={review.text} rating={review.rating} />);
    expect(wrapper.find('[data-id="name"]').text()).toBe('Anonymous');
  });
  it('should display rating', () => {
    const rating = review.rating;
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="star-checked"]').length).toBe(rating);
  });
  it('should display comment', () => {
    const comment = review.text;
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="text"]').text()).toBe(comment);
  });
});
