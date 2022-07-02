export const addUser = ({ id, name }) => {
  return {
    type: "ADDUser",
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETEUser",
    payload: {
      id,
    },
  };
};
