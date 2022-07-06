import { USER_NEXT, USER_PREV } from "./users.actions";

import { users } from "./usersList";

const itemsPerPage = 3;

const getCurrentUsers = (currentPage) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);
  return usersToRender;
};

const initialState = {
  users: users,
  currentUsersList: getCurrentUsers(0),
  currentPage: 0,
  itemsPerPage: itemsPerPage,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_NEXT:
      return {
        ...state,
        currentUsersList: getCurrentUsers(state.currentPage + 1),
        currentPage: state.currentPage + 1,
      };
    case USER_PREV:
      return {
        ...state,
        currentUsersList: getCurrentUsers(state.currentPage - 1),
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
};

export default usersReducer;
