import React from 'react';
import { shallow , configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Product from './Product'

configure({adapter: new Adapter()});

describe('Product.test.js', () => {
    it("renders correctly", () => {
        const wrapper = shallow(
          <Product />
        );
        expect(wrapper.exists()).toBe(true);
    });

    it("handleModel", () => {
        const wrapper = shallow(
          <Product />
        );
        const componentInstance = wrapper.instance()
        const mockGroups = [
            {
                id: 'id', 
                showModal: false, 
                hero: {href: 'fake image url'}, 
                images: [],
                priceRange: {
                    selling: {
                        low: 10,
                        high: 20
                    }
                }
            }]
        componentInstance.state.data.groups = mockGroups
        componentInstance.handleModel({id: 'id'})
        expect(mockGroups[0].showModal).toBe(true)
    });
})