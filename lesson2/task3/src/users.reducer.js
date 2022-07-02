export const userReducer = (state = { userList: [] }, action) => {
  switch (action.type) {
    case "ADDUser":
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };

    case "DELETEUser":
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
