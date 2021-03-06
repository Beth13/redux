import { USER_NEXT, USER_PREV } from "./users.actions";

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Justin",
  },
  {
    id: "id-4",
    age: 45,
    name: "Franklin",
  },
  {
    id: "id-5",
    age: 45,
    name: "John",
  },
  {
    id: "id-6",
    age: 45,
    name: "Andrew",
  },
  {
    id: "id-7",
    age: 45,
    name: "Pol",
  },
  {
    id: "id-8",
    age: 45,
    name: "Ron",
  },
  {
    id: "id-9",
    age: 45,
    name: "Harry",
  },
  {
    id: "id-10",
    age: 45,
    name: "Anna",
  },
];

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
