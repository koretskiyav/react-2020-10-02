import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import Rate from '../../Rate';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should contain Rate', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.contains(Rate)).toEqual(true);
  });

  it('should contain user', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').length).toBe(1);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Antony');
  });

  it('should contain text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').length).toBe(1);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe('Not bad');
  });
});
