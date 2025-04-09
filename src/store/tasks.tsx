import { generateUUIDFromDateTime } from '@/utils/generateUUIDFromDateTime';
import { ReactNode, createContext, useState, useContext } from 'react';

export type Task = {
  uuid: string;
  title: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  totalTasks: number;
  numberOfCompletedTasks: number;
  addTask: (title: string) => void;
  removeTask: (uuid: string) => void;
  toggleTask: (uuid: string) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const totalTasks = tasks.length;
  const numberOfCompletedTasks = tasks.filter((task) => task.completed).length;

  function addTask(title: string) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { uuid: generateUUIDFromDateTime(), title, completed: false },
    ]);
  }

  function removeTask(uuid: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.uuid !== uuid));
  }

  function toggleTask(uuid: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.uuid === uuid ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <TaskContext.Provider
      value={{ tasks, totalTasks, numberOfCompletedTasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }

  return context;
};
