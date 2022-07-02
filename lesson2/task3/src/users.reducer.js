const initialState = {
  usersList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDUser":
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };

    case "DELETEUser":
      return {
        ...state,
        usersList: state.usersList.filter(
          (user) => user.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
