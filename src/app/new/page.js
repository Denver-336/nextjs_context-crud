"use client";

import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function New({ params }) {
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("task update successfully");
    } else {
      createTask(data.title, data.description);
      toast.success("task created successfully");
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) setValue("title", taskFound.title);
      setValue("description", taskFound.description);
    }
  }, [params.id, setValue, tasks]);

  return (
    <div className="mt-12 text-gray-400 flex justify-center items-center h-full">
    <form className="bg-gray-700 p-10" onSubmit={onSubmit}>
      <h2 className="my-2">New Task</h2>
      <input
      className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none"
        placeholder="write title"
        {...register("title", { required: true })}
      />
      {errors.title && <span className="block text-red-400 mb-2">This field is required</span>}
      <textarea
      className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none"
        placeholder="writer description"
        {...register("description", { required: true })}
      />
      {errors.description && <span className="block text-red-400 mb-2">This field is required</span>}
      <button className="mt-2 text-green-200 bg-green-500 hover:bg-green-400 px-4 py2 rounded-sm disabled:opacity-30">Save</button>
    </form>
    </div>
  );
}
