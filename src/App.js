import "./App.css";
import Home from "./pages/Home";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import StudentList from "./components/StudentList";
import TeacherList from "./components/TeacherList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Details from "./components/Details";
function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/student"} element={<AddStudent />} />
        <Route exact path={"/teacher"} element={<AddTeacher />} />
        <Route exact path={"/studList"} element={<StudentList />} />
        <Route exact path={"/details"} element={<Details />} />
        <Route exact path={"/teacherList"} element={<TeacherList />} />
        {/* <Route exact path={'/teacherList/:id'} element={<Details/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
