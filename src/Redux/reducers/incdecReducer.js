import{ INCREMENT,DECREMENT}from "../actions/IncrementDecrementAction"

const initialState = {
   number:0
  }
  
  // Use the initialState as a default value
  export default function rootReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      case INCREMENT:
        return {number : state.number+1};
      case DECREMENT :
        return {number: state.number-1};
        // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }