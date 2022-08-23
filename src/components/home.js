import "../App.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
const Header = () => {
  useEffect(() => {}, []);

  return (
    <Alert variant="info">
      <Alert.Heading>Mentor and Student Assigning with Database</Alert.Heading>

      <hr />
      <p className="mb-0">Back-End: Node Js Database: MongoDB</p>
    </Alert>
  );
};

const CreateStudent = () => {
  const navigate = useNavigate();
  return (
    <div className="student">
      <Card>
        <Card.Header>STUDENT</Card.Header>
        <Card.Body>
          <Card.Title>API TO CREATE STUDENT</Card.Title>
          <Card.Text>
            This api allows you to create a student with student details
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/student");
            }}
          >
            Click here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const CreateMentor = () => {
  const navigate = useNavigate();
  return (
    <div className="mentorD">
      <Card>
        <Card.Header>MENTOR</Card.Header>
        <Card.Body>
          <Card.Title>API TO CREATE MENTOR</Card.Title>
          <Card.Text>
            This api allows you to create a mentor with mentor details
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/mentor");
            }}
          >
            Click here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const GetStudentDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="getstudent">
      <Card>
        <Card.Header>STUDENT DETAILS</Card.Header>
        <Card.Body>
          <Card.Title>CLICK HERE FOR STUDENT DETAILS</Card.Title>
          <Card.Text>get all student details.</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/getstudent");
            }}
          >
            Click here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const AssignMentor = () => {
  const navigate = useNavigate();
  return (
    <div className="assignMentor">
      <Card>
        <Card.Header>ASSIGN MENTOR</Card.Header>
        <Card.Body>
          <Card.Title>API TO ASSIGN MENTOR</Card.Title>
          <Card.Text>
            This api allows you to assign mentor to student.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/addstudent");
            }}
          >
            click here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const ModifyMentor = () => {
  const navigate = useNavigate();
  return (
    <div className="modifyMentor">
      <Card>
        <Card.Header>MODIFY MENTOR</Card.Header>
        <Card.Body>
          <Card.Title>API TO MOODIFY MENTOR TO STUDENT</Card.Title>
          <Card.Text>This api allows you to modify student's mentor.</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/modify");
            }}
          >
            click here
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export {
  GetStudentDetails,
  Header,
  CreateStudent,
  CreateMentor,
  AssignMentor,
  ModifyMentor,
};
