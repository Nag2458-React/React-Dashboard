import React from "react";
import "./App.css";
import "./css/Style.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import CHeader from "./components/CHeader";
import Tabs from "./components/Tabs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CMeeseva from "./components/meeseva/CMeeseva"; // Import the CMeeseva component
import CTFiber from "./components/tfiber/CTFiber";
import CTask from "./components/task/CTask";
import CTHub from "./components/thub/CTHub";
function App() {
  return (
    <>
      <Router>
        <CHeader />
        <div className="App">
          <Routes>
            <Route path="/" element={<Tabs />} />
            {/* Define the route for CMeeseva */}
            <Route path="/meeseva" element={<CMeeseva />} />
            {/* Define the route for CTFiber */}
            <Route path="/tfiber" element={<CTFiber />} />
            <Route path="/task" element={<CTask />} />
            <Route path="/thub" element={<CTHub />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
