import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import GiftList from "./GiftList";


describe('GiftList', function () {
    const wrapper = shallow(<GiftList/>);

    describe('App on page load', () => {


        it('test if App exists', () => {
            expect(wrapper.exists()).toEqual(true);
        });

        it('test the Label of the App', () => {
            const input = wrapper.find("[data-title]");
            expect(input).toHaveLength(1);
        });

        it('test the first input for gift recepient', () => {
            const input = wrapper.find(".data-gift-recepient");
            expect(input).toHaveLength(1);
        });
        it('test the first input Placeholder', () => {
            const input = wrapper.find(".data-gift-recepient");
            expect(input.props().placeholder).toBe("name of the recepient");
        });

        it('test the second input for gift item', () => {
            const input = wrapper.find(".data-gift-item");
            expect(input).toHaveLength(1);
        });
        it('test the second input Placeholder', () => {
            const input = wrapper.find(".data-gift-item");
            expect(input.props().placeholder).toBe("What's the gift");
        });

        it('test if submit button exists', () => {
            const submit = wrapper.find("button");
            expect(submit.exists()).toEqual(true);
        });
    });
    describe('Validate Data', () => {

        it('test if the first input is valid', () => {
            const recepInput = wrapper.find(".data-gift-recepient");
            const itemInput = wrapper.find(".data-gift-item");
            const giftRecepientEvent = {
                target: {
                    value: "Lahari"
                }
            };
            const giftItemEvent = {
                target: {
                    value: ""
                }
            };
            recepInput.simulate('change', giftRecepientEvent);
            itemInput.simulate('change', giftItemEvent);
            const submitButton = wrapper.find(".data-submit");
            submitButton.simulate('click');
            expect(submitButton.props().disabled).toEqual(true);
        });


        it('test if the second input is valid', () => {
            const recepInput = wrapper.find(".data-gift-recepient");
            const itemInput = wrapper.find(".data-gift-item");
            const giftRecepientEvent = {
                target: {
                    value: ""
                }
            };
            const giftItemEvent = {
                target: {
                    value: "Sravan"
                }
            };
            recepInput.simulate('change', giftRecepientEvent);
            itemInput.simulate('change', giftItemEvent);
            const submitButton = wrapper.find(".data-submit");
            submitButton.simulate('click');
            expect(submitButton.props().disabled).toEqual(true);
        });


        it('test if the both input are valid', () => {
            const recepInput = wrapper.find(".data-gift-recepient");
            const itemInput = wrapper.find(".data-gift-item");
            const giftRecepientEvent = {
                target: {
                    value: "Lahari"
                }
            };
            const giftItemEvent = {
                target: {
                    value: "Sravan"
                }
            };
            recepInput.simulate('change', giftRecepientEvent);
            itemInput.simulate('change', giftItemEvent);
            const submitButton = wrapper.find(".data-submit");
            submitButton.simulate('click');
            expect(submitButton.props().disabled).toEqual(false);
        });
        it('test if the both input are invalid', () => {
            const recepInput = wrapper.find(".data-gift-recepient");
            const itemInput = wrapper.find(".data-gift-item");
            const giftRecepientEvent = {
                target: {
                    value: ""
                }
            };
            const giftItemEvent = {
                target: {
                    value: ""
                }
            };
            recepInput.simulate('change', giftRecepientEvent);
            itemInput.simulate('change', giftItemEvent);
            const submitButton = wrapper.find(".data-submit");
            submitButton.simulate('click');
            expect(submitButton.props().disabled).toEqual(true);
        });
    });

});
