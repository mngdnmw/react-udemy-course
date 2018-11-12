import React, { Component } from "react";
// Create TWO new components: UserInput and UserOutput
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "User 2"
  };

  // Add a method to manipulate the state (=> an event-handler method)
  switchUsernameHandler = newUserName => {
    this.setState({
      username: newUserName
    });
  };

  usernameChangeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        {/* Pass the event-handler method reference to the UserInput component and bind it to the input-change event
            Ensure that the new input entered by the user overwrites the old username passed to UserOutput */}
        <UserInput
          changed={this.usernameChangeHandler}
          // Add two-way-binding to your input (in UserInput) to also display the starting username
          startvalue={this.state.username}
        />
        {/* Output multiple UserOutput components in the App component (any paragraph texts of your choice) */}
        <UserOutput
          //  Pass a username (of your choice) to UserOutput via props and display it there
          username={"User 1"}
          //  Add a method to manipulate the state (=> an event-handler method)
          click={this.switchUsernameHandler.bind(this, "User 3")}
        />
        {/* Add state to the App component (=> the username) and pass the username to the UserOutput component */}
        <UserOutput username={this.state.username} />
      </div>
    )
  }
}
export default App;
