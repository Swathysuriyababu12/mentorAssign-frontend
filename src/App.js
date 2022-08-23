import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import First from "./components/first";
import { Routes, Route } from "react-router-dom";

import NewMentor from "./components/mentor";
import GetStudent from "./components/getStudent";
import ListAll from "./components/studentDetails";
import AddStudentstoMentor from "./components/AddingStudentsToMentor";
import ChangeMentorforStudent from "./components/ChangeMentorForStudent.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/mentor" element={<NewMentor />} exact />
      <Route path="/student" element={<GetStudent />} exact />
      <Route path="/getstudent" element={<ListAll />} exact />
      <Route path="/addstudent" element={<AddStudentstoMentor />} exact />
      <Route path="/modify" element={<ChangeMentorforStudent />} exact />
    </Routes>
  );
}

export default App;
