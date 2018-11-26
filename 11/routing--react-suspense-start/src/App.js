import React, { Component, Fragment, Suspense } from "react";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
// import Posts from './containers/Posts';

import User from "./containers/User";
// import Welcome from "./containers/Welcome";

const Posts = React.lazy(() => import("./containers/Posts"));
class App extends Component {
  state = { showPosts: false };

  modeHandler = () => {
    this.setState(pre => {
      return {
        showPosts: !pre.showPosts
      };
    });
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.modeHandler}>Toggle</button>
        {this.state.showPosts ? (
          //Does not work with server side rendering at this time
          <Suspense fallback={<div>Loading</div>}>
            <Posts />
          </Suspense>
        ) : (
          <User />
        )}
      </Fragment>

      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route
      //       path="/posts"
      //       render={() => {
      //         return (
      //           <Suspense fallback={<div>Loading</div>}>
      //             <Posts />
      //           </Suspense>
      //         );
      //       }}
      //     />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
