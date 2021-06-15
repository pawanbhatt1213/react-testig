import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("App component", () => { 
    let appComponent = mount(<App />);

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