import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";
import API from "./Components/API"; // Adjust the path if needed
import "bootstrap/dist/css/bootstrap.min.css";
import { Curd } from "./Components/Curd";
import { DataForm } from "./Components/DataForm";


const App = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/api" className="nav-link">API Component</Link>
            </li>
            <li className="nav-item">
              <Link to="/curd" className="nav-link">CRUD Component</Link>
            </li>
            <li className="nav-item">
              <Link to="/form" className="nav-link">Form</Link>
            </li> 
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<API />} />
          <Route path="/curd" element={<Curd/>} />
          <Route path="/form" element={<DataForm/>} />
          
        </Routes>
      </Router>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1>Welcome to React Routing App</h1>
      <p>Click on the links above to navigate to different components.</p>
    </div>
  );
};

export default App;
