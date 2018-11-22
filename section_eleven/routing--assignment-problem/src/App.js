import React, { Component } from "react";
import { Redirect, Route, NavLink, Switch } from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Info from "./components/Info";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <ul style={{ listStyle: "none", margin: "auto", padding: "0" }}>
              <li style={{ margin: "10px", display: "inline-block" }}>
                <NavLink to="/info">Info</NavLink>
              </li>
              <li style={{ margin: "10px", display: "inline-block" }}>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li style={{ margin: "10px", display: "inline-block" }}>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </ul>
        </nav>
        <Switch>
          <Route path="/info" component={Info} />
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
