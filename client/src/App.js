import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";
import About from "./pages/About.js";
import DepartmentPage from "./pages/DepartmentPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/department/:department" element={<DepartmentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
