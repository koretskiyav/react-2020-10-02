import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rewiews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Rewiews', () => {
  it('should render', () => {
    const wrapper = mount(<Rewiews reviews={reviews} />);
    expect(wrapper.find('[data-id="reweiws"]').length).toBe(1);
  });
  it('should render all reweiws', () => {
    const wrapper = mount(<Rewiews reviews={reviews} />);
    expect(wrapper.find('[data-id="reweiw"]').length).toBe(2);
  });
});
