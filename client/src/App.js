import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Departments from "./pages/Departments.js";
import About from "./pages/About.js";
import DepartmentPage from "./pages/DepartmentPage.js";
import CoursePage from "./pages/CoursePage.js";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
