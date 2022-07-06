export const usersListSelector = (state) => {
  return state.users;
};

export const currentPageSelector = (state) => {
  return state.currentPage;
};

export const currentUsersListSelector = (state) => {
  return state.currentUsersList;
};

export const itemsPerPageSelector = (state) => {
  return state.itemsPerPage;
};
