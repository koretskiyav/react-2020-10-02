import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';
const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
    it('should show reviews-user', () => {
        const wrapper = mount(<Reviews rev={review} />);
        expect(wrapper.find('[data-id="reviews-user"]').text()).toBe(review.user);
        expect(wrapper.find('[data-id="reviews-text"]').text()).toBe(review.text);
    });
});
