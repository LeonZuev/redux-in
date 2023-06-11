import { useDispatch } from "react-redux"
import Action from "./types/Action";

export default function Counter(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <div>
      <button
      type="button"
      onClick={() => dispatch<Action>({type: 'counter/minus', payload: 1})}>
        -1
      </button>

      <button
      type="button"
      onClick={() => dispatch<Action>({type: 'counter/plus', payload: 1})}>
        +1
      </button>
    </div>
    
  )
}