import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  GetStudentDetails,
  Header,
  CreateStudent,
  CreateMentor,
  AssignMentor,
  ModifyMentor,
} from "./home";
function First() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="App">
        <GetStudentDetails />
        &nbsp;&nbsp;&nbsp;
        <CreateStudent />
        &nbsp;&nbsp;&nbsp;
        <CreateMentor />
      </div>
      <div className="mentor">
        <AssignMentor />
        &nbsp;&nbsp;&nbsp;
        <ModifyMentor />
      </div>
    </>
  );
}

export default First;
