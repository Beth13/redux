export const USER_PREV = "USER/PREV";
export const USER_NEXT = "USER/NEXT";

export const goPrev = () => {
  return {
    type: USER_PREV,
  };
};

export const goNext = () => {
  return {
    type: USER_NEXT,
  };
};
