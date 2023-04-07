import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desciption, setDesciption] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, desciption);
    createTask({
      title,
      desciption,
    });
    setTitle("");
    setDesciption("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded outline-none"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea..."
          onChange={(e) => setDesciption(e.target.value)}
          value={desciption}
          className="bg-slate-300 p-3 w-full mb-2 rounded outline-none"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 rounded-md text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
