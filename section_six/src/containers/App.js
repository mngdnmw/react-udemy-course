import React, { PureComponent } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log(props.title);
  }
  state = {
    persons: [
      { id: 'jjjj', name: 'boboo', age: 999 },
      { id: 'uskjds', name: 'Ya mum', age: 18 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );

    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.setState.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}
//Higher order component (HOC) - wrapping App component in another component and giving it more functionality
export default App;
