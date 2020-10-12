import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews1 = restaurants[0].reviews;
const reviews2 = restaurants[1].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews1} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should contain 2 elements on 1st page', () => {
    const wrapper = mount(<Reviews reviews={reviews1} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(2);
  });
  it('should contain name', () => {
    const wrapper = mount(<Reviews reviews={reviews1} />);
    expect(wrapper.find('[data-id="review"]').contains('Antony')).toBe(true);
  });
  it('should contain review', () => {
    const wrapper = mount(<Reviews reviews={reviews1} />);
    expect(wrapper.find('[data-id="review"]').contains('Not bad')).toBe(true);
  });
  it('should contain 3 elements on 2nd page', () => {
    const wrapper = mount(<Reviews reviews={reviews2} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(3);
  });
});
