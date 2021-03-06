import React, { Component } from "react";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import "./Blog.css";
//import FullPost from "./FullPost/FullPost";
import { Route, NavLink, Switch } from "react-router-dom";
import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(()=>{
  return import("./NewPost/NewPost");
});
class Blog extends Component {
  state = { auth: false };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              {/* Absolute path */}
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              {/* Relative path */}
              <li>
                <NavLink
                  to={{
                    // pathname: this.props.match.url + '/new-post',
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New posts
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* Order is important for a switch - only loads one at a time*/}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* Can't have redirect to "/" and route to default page together, use one or the other */}
          {/* <Route component={Posts}/> */}
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
