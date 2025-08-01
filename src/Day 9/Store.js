import { createStore } from "redux";
import formReducer from "./FormSlice";

const store = createStore(
	formReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;