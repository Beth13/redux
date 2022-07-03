export const addProduct = ({ id, name }) => {
  return {
    type: "PRODUCT/ADD",
    payload: {
      id,
      name,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: "PRODUCT/REMOVE",
    payload: {
      id,
    },
  };
};
