import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Tasks():JSX.Element {
   const tasks = useSelector((globalState: RootState) =>globalState.tasks);// достали из глобального состояния
  return (
    <>
    <div>Tasks</div>
    <ul>
        {tasks.map((el) => 
        (
          <li key={el.id}>
            {el.title}
          </li>
        ))}
    </ul>
    </>
  );
}