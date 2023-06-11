import { useDispatch, useSelector } from "react-redux"
import Action from "./types/Action";
import { RootState } from "../../store";

export default function Counter(): JSX.Element {
  const dispatch = useDispatch();
  const value = useSelector((globalState: RootState) => globalState)
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch<Action>({ type: 'counter/minus', payload: 1 })}>
        -1
      </button>{' '}

      <button
        type="button"
        onClick={() => dispatch<Action>({ type: 'counter/minus', payload: 1 })}>
        +1
      </button>
    </div>
  )
}