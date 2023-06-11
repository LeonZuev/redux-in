import Action from "./types/Action";
import CounterState from "./types/CounterState";
// редьюсеру нужно стартовое значение, вводим переременную со значением '0'
const initialState: CounterState = {
  value: 0,
}

export default function counterReducer(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case 'counter/minus':
      // разобрали стэйт, чтобы присвоить новое значение
      return { ...state, value: state.value - action.payload };
    case 'counter/plus':
      return { ...state, value: state.value + action.payload }; // либо онимаем либо прибовляем action в value
    // возвращаем state, если экшн из другого раздела или просто не тот action
    default: return state;
  }
  // вместо default можно использовать return
  // return state;
}
// reduce возвращает изменённое состояние(state)