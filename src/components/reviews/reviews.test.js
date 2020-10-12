import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from './reviews';

import { id } from './reviews'

const reveiws = id[0];


Enzyme.configure({ adapter: new Adapter() });

describe('Rewiews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reveiws={reveiws} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
})