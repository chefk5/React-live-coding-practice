import React from 'react';
import { ITask } from './TaskList';
import './Task.css';

interface TaskProps extends ITask {
  removeFunc: (id: string) => void;
  markAsDone: (id: string) => void;
  markAsDoneBtnName: string;
}

export default function Task({
  id,
  name,
  done,
  markAsDoneBtnName,
  removeFunc,
  markAsDone,
}: TaskProps) {
  return (
    <div className='task'>
      <li style={{ textDecoration: done ? 'line-through' : 'none' }}>{name}</li>
      <button onClick={() => removeFunc(id)}>Remove Item</button>
      <button onClick={() => markAsDone(id)}>{markAsDoneBtnName}</button>
    </div>
  );
}
