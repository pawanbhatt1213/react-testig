import React from 'react';
import { mount } from "enzyme";
import Note from "./Note";

const props = {notes: ["test note"]}

describe("Note Component", () => {
    let note = mount(<Note {...props} />);

    it("Renders note component properly.", ()=>{
        expect(note.find('.card-body').text()).toEqual(props.notes[0])
    })
});