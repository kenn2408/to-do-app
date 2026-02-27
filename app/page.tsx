"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
<<<<<<< HEAD
  const [tasks, setTasks] = useState<{
    text: string;
    isCompleted: boolean;
  }[]>([]);
=======
  const [tasks, setTasks] = useState<string[]>([]);
>>>>>>> 05567b9d127b1548c8a517932b95f355f0170035

  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
<<<<<<< HEAD
    setTasks([...tasks,
    { text: input, isCompleted: false }]);
    setInput("");
  }

  const checkTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks(
      tasks.filter((_, i) => i !== index)
    );
  };

=======
    setTasks([...tasks, input]);
    setInput("");
  }

>>>>>>> 05567b9d127b1548c8a517932b95f355f0170035
  return (
    <div className="h-screen flex flex-col items-center pt-20">
      <div className="w-165 h-18 bg-mauve-500 flex justify-center items-center text-4xl font-bold rounded-xl shadow-xl mb-10">
        To do list
      </div>

<<<<<<< HEAD
      <div className="mb-10">
=======
      <div className="flex gap-2 mb-10">
>>>>>>> 05567b9d127b1548c8a517932b95f355f0170035
        <input
          className="w-115 h-15 border px-3 py-2 text-xl rounded-xl mr-5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task" />

        <button
          className="w-25 h-15 bg-zinc-500 text-xl text-white px-4 py-2 rounded-xl"
          onClick={addTask}
<<<<<<< HEAD
        > Add
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => checkTask(index)}
            />

            <div className="w-110 bg-zinc-600 text-xl px-3 py-2 rounded-xl">
              {task.text}
            </div>

            <button
              className="w-25 bg-zinc-600 text-xl text-white px-4 py-2 rounded-xl"
              onClick={() => deleteTask(index)}
            > Delete
            </button>
=======
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-2 w-64">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-zinc-600 text-xl px-3 py-2 rounded-xl">
            {task}
>>>>>>> 05567b9d127b1548c8a517932b95f355f0170035
          </div>
        ))}
      </div>

<<<<<<< HEAD

=======
>>>>>>> 05567b9d127b1548c8a517932b95f355f0170035
    </div>
  );
}
