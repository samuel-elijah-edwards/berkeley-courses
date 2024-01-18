import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Departments from "./pages/Departments.js";
import About from "./pages/About.js";
import DepartmentPage from "./pages/DepartmentPage.js";
import CoursePage from "./pages/CoursePage.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Rating from "./pages/Rating.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route
            path="/departments/:departmentCode"
            element={<DepartmentPage />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/departments/:departmentCode/:course_code"
            element={<CoursePage />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/departments/:departmentCode/:course_code/rating"
            element={<Rating />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
