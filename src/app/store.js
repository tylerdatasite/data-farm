// Store JS
// (This store uses Redux/React-Redux)
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import centralReducers from "./reducers";

const store = createStore(
    centralReducers,
    applyMiddleware(thunkMiddleware)
);

export default store;