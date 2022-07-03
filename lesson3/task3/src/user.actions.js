export const setUser = (userData) => {
  return {
    type: "USER/SET",
    payload: { userData },
  };
};

export const removeUser = () => {
  return {
    type: "USER/REMOVE",
  };
};
