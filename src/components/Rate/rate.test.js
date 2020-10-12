import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rate from './rate';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
    it('should show rate', () => {
        const rateToShow = 23.09;
        const wrapper = mount(<Rate rate={rateToShow} />);
        expect(wrapper.find('[data-id="rate-value"]').text()).toBe(rateToShow.toString());
    });
});
