const INITIAL_STATE = {
  showAddContest: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_CONTEST':
          return {
            ...currentState,showAddContest: !currentState.showAddContest
          }


    default:
       return currentState;

  }
}

export default appReducer;