import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import Note from "./Note";

export default function App() {
  const [notes, setNotes] = React.useState([]);
  const [note, setNote] = React.useState("");

  React.useEffect(() => {
    setNotes(read_cookie("notes"));
  }, []);
  React.useEffect(() => {
    bake_cookie("notes", notes);
  }, [notes]);

  const clearNotes = () => {
    setNotes([]);
    delete_cookie("notes");
  };

  const addNotes = (e) => {
    e.preventDefault();
    setNotes([...notes, note]);
    setNote("");
  };

  const onNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="App">
      <Container>
        <h2 className="text-center">Lets note it down!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Enter note..."
              value={note}
              onChange={onNoteChange}
            />
          </Form.Group>
          <div className="mx-auto" style={{ width: "150px" }}>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => addNotes(e)}
            >
              Add
            </Button>
            <Button className="ml-4" variant="danger" onClick={clearNotes}>
              Clear
            </Button>
          </div>
        </Form>

        <Note notes={notes} />
      </Container>
    </div>
  );
}
