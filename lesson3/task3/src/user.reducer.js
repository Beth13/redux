const usersReducer = (state = null, action) => {
  switch (action.type) {
    case "USER/SET": {
      return action.payload.userData;
    }

    case "USER/REMOVE": {
      return null;
    }

    default:
      return state;
  }
};

export default usersReducer;
