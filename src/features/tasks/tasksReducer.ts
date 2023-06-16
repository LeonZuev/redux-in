import uniqid from 'uniqid';
import Action from "./types/Action";
import Task from "./types/Task";
// создали  таск
const initialState: Task[] = [
    {
        id:uniqid(),
        title:"Learn Redux",
        done: false,
    }
];

export default function tasksReducer(
    state: Task [] = initialState, action: Action): Task [] { 
  switch (action.type) {
    // смотрим в Acnions.ts действия
    case 'tasks/add':
      return [...state, {id: uniqid(), title: action.payload, done: false}];
    
    default: return state;
  }
  // вместо default можно использовать return
  // return state;
}
// reducer принимает стэйт, разбирает его и делает то,что нам нужно
// мы не можем мутировать стэйт,который пришёл
// он берёт одно состояние и возвращает новое состояние