const languageReducer = (state = "en", action) => {
  switch (action.type) {
    case "LANGUAGE/SET":
      return action.payload;

    default:
      return state;
  }
};

export default languageReducer;
