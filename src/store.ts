import { combineReducers, createStore } from "redux";

const store = createStore(combineReducers({
    counter: CounterReducer
}))

export default store

export type RootState = ReturnType<typeof store.getState> // экспорт RootState