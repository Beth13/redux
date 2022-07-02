import store from "./store.js";
import { increment, decrement, reset } from "./counter.actions.js";
import { addUser, deleteUser, updateUser } from "./users.actions.js";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(increment());

store.dispatch(addUser({ id: 1, name: "Liza" }));
store.dispatch(addUser({ id: 2, name: "Kate" }));
store.dispatch(addUser({ id: 3, name: "Bob" }));

store.dispatch(deleteUser(2));

store.dispatch(updateUser(3, { id: 3, name: "Tom" }));
