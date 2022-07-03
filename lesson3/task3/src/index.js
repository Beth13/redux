import store from "./store.js";
import { addProduct, removeProduct } from "./cart.actions.js";
import { removeUser, setUser } from "./users.actions.js";
import { setLanguage } from "./language.actions.js";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 1, name: "Apple" }));
store.dispatch(addProduct({ id: 2, name: "Potato" }));
store.dispatch(addProduct({ id: 3, name: "Candy" }));
store.dispatch(removeProduct(2));

store.dispatch(setUser({ name: "Tom" }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: "Liza" }));

store.dispatch(setLanguage("ua"));
