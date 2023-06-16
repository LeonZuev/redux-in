import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Tasks(): JSX.Element {
  const tasks = useSelector((globalState: RootState) => globalState.tasks);// достали из глобального состояния
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();
  function addTask(e: SyntheticEvent): void {
    e.preventDefault();
    dispatch({ type: 'tasks/add', payload: task });
  }
  return (
    <>
      <div>Tasks</div>
      <form onSubmit={addTask}>
        <input
          type="text"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {tasks.map((el) =>
        (
          <li key={el.id}>
            {el.title}
          </li>
        ))
        }
      </ul>
    </>
  );
}
