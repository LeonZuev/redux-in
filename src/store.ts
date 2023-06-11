import { combineReducers, createStore } from "redux";
import counterReducer from "./features/counter/counterReducer";

const store = createStore(combineReducers({
  counter: counterReducer // импорт
}))

export default store

export type RootState = ReturnType<typeof store.getState> // экспорт RootState
