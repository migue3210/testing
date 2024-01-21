import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './login/login.js'
import Register from "./register/register.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Register />}
          ></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
