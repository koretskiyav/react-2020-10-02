import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';

import { user } from './review';

const review = user[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reveiw', () => {
  it('should render', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
});