import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Star from './star';

Enzyme.configure({ adapter: new Adapter() });

describe('Star', () => {
  it('renders', () => {
    const wrapper = mount(<Star />);

    expect(wrapper.exists('[data-id="star"]')).toBe(true);
    expect(wrapper.find('[data-id="star"]').length).toBe(1);
  });

  it('can be checked', () => {
    const wrapper = mount(<Star checked={true} />);

    expect(wrapper.exists('[data-id="star"]')).toBe(false);
    expect(wrapper.find('[data-id="star"]').length).toBe(0);

    expect(wrapper.exists('[data-id="star-checked"]')).toBe(true);
    expect(wrapper.find('[data-id="star-checked"]').length).toBe(1);
  });
});
