import React from "react";

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Views
import Signin from "./views/Signin";
import Signup from "./views/Signup";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
