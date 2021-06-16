import React from "react";
import { mount } from "enzyme";
import App from "./App";

let appComponent = mount(<App />);

describe("App component", () => { 

    it("render the app title", ()=>{
        expect(appComponent.find('h2').text()).toEqual("Lets note it down!");
    });

    it("renders the form", () => {
        expect(appComponent.find("form").exists()).toBe(true);
    })

    it("render add button", ()=>{
        expect(appComponent.find(".btn").at(0).text()).toEqual("Add");
    });

    it("render clear button", ()=>{
        expect(appComponent.find(".btn").at(1).text()).toEqual("Clear");
    });
});


describe('creating a note', () => {
    const testNote = "Learn React";
    beforeEach(()=>{
        appComponent.find('.form-control').simulate('change', {target:{value: testNote}});
    });

    it("update the text in the state", ()=>{
        expect(appComponent.find('.form-control').props().value).toEqual(testNote);
    });

    it("adds the note in the note list", ()=>{
        appComponent.find('.btn').at(0).simulate("click");
        expect(appComponent.find('.card-body').text()).toEqual(testNote);
    });
})
