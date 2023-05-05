"use client";

import TaskCard from "@/components/TaskCard.js";
import { useTasks } from "@/context/TaskContext";

export default function Index() {
  const { tasks } = useTasks();

  return (
    <div>
      <div className="m-6 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-slate-300">
          Task List
        </h1>
      </div>
      <div>
        <TaskCard tasks={tasks} />
      </div>
    </div>
  );
}
