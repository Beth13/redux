export const setUser = (name) => {
  return {
    type: "ADD_USER",
    payload: { name },
  };
};

export const removeUser = () => {
  return {
    type: "DELETE_USER",
  };
};
