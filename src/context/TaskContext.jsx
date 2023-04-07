import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tareas, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(task) {
    setTask([
      ...tareas,
      {
        id: tareas.length,
        title: task.title,
        descripcion: task.desciption,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTask(tareas.filter((tareas) => tareas.id !== taskID));
  }

  return (
    <TaskContext.Provider
      value={{
        tareas,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
