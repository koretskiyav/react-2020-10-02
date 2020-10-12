import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('check the type element of review', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').type()).toBe('div');
  });
  it('should render content in review', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-content"]').length).toBe(1);
  });
  it('check the type element of content', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-content"]').type()).toBe('div');
  });
  it('should render user name in review', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-user"]').length).toBe(1);
  });
  it('check the type element of name', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-user"]').type()).toBe('h4');
  });
  it('check the content of name', () => {
    const wrapper = mount(<Review review={review} user={review.user} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Antony');
  });
  it('should render user text in review', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-text"]').length).toBe(1);
  });
  it('check the type element of text', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-text"]').type()).toBe('p');
  });
  it('check the content of text', () => {
    const wrapper = mount(<Review review={review} text={review.text} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe('Not bad');
  });
  it('should render user rating in review', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-rating"]').length).toBe(1);
  });
  it('check the type element of rating', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review-rating"]').type()).toBe('div');
  });
  it('should render Rate in review', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('Rate').length).toBe(1);
  });
});
