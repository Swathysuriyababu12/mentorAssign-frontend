import React, { useState } from "react";
import createData from "../config/createData";
import Card from "react-bootstrap/Card";
import "../App.css";

const GetStudent = () => {
  const [state, setState] = useState({ name: "", email: "", course: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const submitForm = async () => {
    setLoading((prev) => !prev);
    const r = await createData("student", state);
    setResult(r);
    setLoading((prev) => !prev);
  };

  if (loading) {
    return <p>Loading.......</p>;
  }
  return (
    <Card>
      <Card.Header>STUDENT DETAILS</Card.Header>
      <Card.Body>
        <div className="container">
          <div className="row">
            <div className="col">
              <form>
                <div>
                  <label>Name</label>
                  <hr />
                  <input
                    type="text"
                    value={state.name}
                    onChange={(ev) => {
                      setState((prev) => ({ ...prev, name: ev.target.value }));
                    }}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <hr />
                  <input
                    type="email"
                    value={state.email}
                    onChange={(ev) => {
                      setState((prev) => ({ ...prev, email: ev.target.value }));
                    }}
                  />
                </div>
                <div>
                  <label>Course</label>
                  <hr />
                  <select
                    onChange={(ev) => {
                      setState((prev) => ({
                        ...prev,
                        course: ev.target.value,
                      }));
                    }}
                    value={state.course}
                  >
                    <option value="">Select any value</option>
                    <option value="react">react</option>
                    <option value="nodejs">nodejs</option>
                    <option value="frontend">frontend</option>
                    <option value="backend">backend</option>
                    <option value="gameDev">gameDev</option>
                    <option value="MERN stack	">MERN stack</option>
                    <option value="dataScience">dataScience</option>
                  </select>
                </div>
                <hr />
                <div>
                  <button type="button" onClick={() => submitForm()}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {result && (
              <div
                id="liveToast"
                className={result.status === 200 ? "toast show" : "toast"}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Status</strong>
                </div>
                <div className="toast-body">Student Added</div>
              </div>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GetStudent;
