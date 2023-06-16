import uniqid from 'uniqid';
import Action from "./types/Action";
import Task from "./types/Task";
// создали  таск
const initialState: Task[] = [
  {
    id: uniqid(),
    title: "Learn Redux",
    done: false,
  }
];

export default function tasksReducer(
  state: Task[] = initialState, action: Action): Task[] {
  switch (action.type) {
    // смотрим в Acnions.ts действия
    case 'tasks/add':
      return [...state, { id: uniqid(), title: action.payload, done: false }];
    case 'tasks/delete':
      // return state.filter((taks) => taks.id !== action.payload);
      return state.filter(({ id }) => id !== action.payload);
    case 'tasks/edit':
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, title: action.payload.title };
        }
        return task;
      });
    case 'tasks/done':
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: true };
        }
        return task;
      });
    default: return state;
  }
}
// reducer принимает стэйт, разбирает его и делает то,что нам нужно
// мы не можем мутировать стэйт,который пришёл
// он берёт одно состояние и возвращает новое состояние
// !!!! НЕЛЬЗЯ ВЫЗЫВАТЬ МУТИРУЮЩИЕ МЕТОДЫ ВНУТРИ РЕДЬЮСЕРА !!!!