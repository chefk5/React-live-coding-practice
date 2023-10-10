import React, { useState } from 'react';
import Task from './Task';

export interface ITask {
  id: string;
  name: string | null;
  done: boolean;
}
export default function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTask = () => {
    if (!value) return;

    setTasks((prevTasks) => {
      const newTask: ITask = {
        id: String(prevTasks.length + 1),
        name: value,
        done: false,
      };
      return [...prevTasks, newTask];
    });
    setValue('');
  };

  const removeTask = (clickedTaskID: string) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id != clickedTaskID)
    );
  };

  const markAsDone = (clickedTaskID: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === clickedTaskID
          ? { ...prevTask, done: !prevTask.done }
          : prevTask
      )
    );
  };

  return (
    <div>
      <input
        value={value ?? ''}
        onChange={handleChange}
        placeholder='Add task'
      />
      <button onClick={() => addTask()}>Submit</button>
      <ul>
        {tasks.map((task) => (
          <>
            <Task
              key={String(task.id)}
              name={task.name}
              id={task.id}
              done={task.done}
              removeFunc={removeTask}
              markAsDone={markAsDone}
            />
          </>
        ))}
      </ul>
    </div>
  );
}
