import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rate from './rate';
import Star from './star';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('renders', () => {
    const wrapper = mount(<Rate />);

    expect(wrapper.exists('[data-id="rate"]')).toBe(true);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });

  it('has total 5 stars', () => {
    const wrapper = mount(<Rate />);

    expect(wrapper.exists(Star)).toBe(true);
    expect(
      wrapper.find('[data-id="star"]').length +
        wrapper.find('[data-id="star-checked"]').length
    ).toBe(5);
  });

  it('has correct checked stars amount', () => {
    const wrapper = mount(<Rate value={3} />);

    expect(wrapper.find('[data-id="star"]').length).toBe(2);
    expect(wrapper.find('[data-id="star-checked"]').length).toBe(3);
  });
});
