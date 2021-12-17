// Store JS
import createStore from "zustand";
import reducers from './reducers';

export const store = createStore(reducers);