const initialState = {
  language: "en",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LANGUAGE/SET": {
      return {
        ...state,
        language: action.payload,
      };
    }

    default:
      return state;
  }
};

export default languageReducer;
