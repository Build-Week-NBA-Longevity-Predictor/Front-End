import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import AccountCreation from "./components/AccountCreation";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2 className="header">Welcome to NBA Career Longevity Projector</h2>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/account" component={AccountCreation} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/dashboard' component={Dashboard}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
