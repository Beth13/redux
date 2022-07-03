const initialState = {
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        user: action.payload.name,
      };
    }

    case "DELETE_USER": {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
