import Action from "./types/Action";
import CounterState from "./types/CounterState";
// редьюсеру нужно стартовое значение, вводим переременную со значением '0'
const initialState: CounterState = {
    value: 0,
}

export default function counterReducer(state: CounterState = initialState, action: Action): CounterState {
    switch (action.type) {
        case 'counter/minus' :
            return {}
    }
}