"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const Max_length = 45;
  const [tasks, setTasks] = useState<{
    text: string;
    isCompleted: boolean;
  }[]>([]);

  const [input, setInput] = useState("");

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addTask = () => {
    if (input.trim() === "") return;
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

  const startEdit = (index: number) => {
    setInput(tasks[index].text);
    setEditIndex(index);
  };

  const updateTask = () => {
    if (editIndex === null) return;

    const updatedTasks = tasks.map((task, index) =>
      index === editIndex
        ? {
          ...task, text: input,
          isCompleted: false
        }
        : task
    );

    setTasks(updatedTasks);
    setInput("");
    setEditIndex(null);
  };

  return (
    <div className="h-screen flex flex-col items-center pt-20">
      <div className="w-165 h-18 bg-mauve-500 flex justify-center items-center text-4xl font-bold rounded-xl shadow-xl mb-10">
        To do list
      </div>

      <div className="flex justify-center items-center mb-10">
        <div className="relative">
          <input
            className="w-145 h-15 border px-3 py-2 pr-14 text-xl rounded-xl mr-2"
            value={input}
            maxLength={Max_length}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
            {input.length}/{Max_length}
          </span>
        </div>

        <button
          className="w-18 h-15 bg-zinc-500 text-xl text-white px-4 py-2 rounded-xl"
          onClick={editIndex === null ? addTask : updateTask}>
          {editIndex === null ? "Add" : "Edit"}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => checkTask(index)}
            />

            <div
              className="w-139 h-13 flex items-center bg-zinc-600 text-xl px-3 py-2 rounded-xl"
              onClick={() => startEdit(index)}
            >
              {task.text}
            </div>

            <button
              className="w-18 h-13 flex justify-center items-center bg-zinc-600 text-xl text-white px-4 py-2 rounded-xl"
              onClick={() => deleteTask(index)}
            > Del
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
