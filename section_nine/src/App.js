import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog';
//import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      //<BrowserRouter basename="/my-app-name">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
