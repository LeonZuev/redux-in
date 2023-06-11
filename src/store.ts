import { type } from "os";
import { combineReducers, createStore } from "redux";

const store = createStore(combineReducers({
    
}))

export default store

export type RootState = ReturnType<typeof store.getState> // экспорт RootState