import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

store.dispatch(addUser({ id: 1, name: "Liza" }));
store.dispatch(addUser({ id: 2, name: "Kate" }));
store.dispatch(addUser({ id: 3, name: "Bob" }));

store.dispatch(deleteUser(2));

store.subscribe(() => {
  const state = store.getState();
});

console.log(store.getState());
