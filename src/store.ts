import { combineReducers, createStore } from "redux";
import counterReducer from "./features/counter/counterReducer";
import authReducer from "./features/auth/authReducer";
import tasksReducer from "./features/tasks/tasksReducer";
import productsReduser from "./features/products/productsReduser";

const store = createStore(combineReducers({
  counter: counterReducer, // импорт: хранилище состояние счётчика
  auth: authReducer,       // хранилище логина и пароля
  tasks: tasksReducer,     // хранилище тасков
  products: productsReduser,
},));

export default store

export type RootState = ReturnType<typeof store.getState> // экспорт RootState
