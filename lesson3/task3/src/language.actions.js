export const setLanguage = (type) => {
  return {
    type: "LANGUAGE/SET",
    payload: type,
  };
};
