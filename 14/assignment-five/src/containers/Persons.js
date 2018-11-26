import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";
class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons.persons
  };
};
const mapDispatchToProsp = dispatch => {
  return {
    onPersonAdd: (name, age) =>
      dispatch({
        type: actionTypes.ADD,
        person: {
          name: name,
          age: age
        }
      }),
    onPersonDelete: id => dispatch({ type: actionTypes.DELETE, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProsp
)(Persons);
