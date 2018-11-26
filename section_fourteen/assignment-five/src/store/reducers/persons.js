import * as actionTypes from "../actions";

const initialState = {
  persons: []
};
const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.person.name,
        age: action.person.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DELETE:
      const updatedPersons = state.persons.filter(
        person => person.id !== action.personId
      );
      return { ...state, persons: updatedPersons };

    default:
      return state;
  }
};
export default personsReducer;
