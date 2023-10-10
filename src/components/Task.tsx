import React from 'react';
import { ITask } from './TaskList';
import './Task.css';

interface TaskProps extends ITask {
  removeFunc: (id: string) => void;
  markAsDone: (id: string) => void;
}

export default function Task({
  id,
  name,
  done,
  removeFunc,
  markAsDone,
}: TaskProps) {
  return (
    <div className='task'>
      <li style={{ textDecoration: done ? 'line-through' : 'none' }}>{name}</li>
      <button onClick={() => removeFunc(id)}>Remove Item</button>
      <button onClick={() => markAsDone(id)}>
        {done ? 'unmark as done' : 'mark as done'}
      </button>
    </div>
  );
}
