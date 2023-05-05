import { useTasks } from "@/context/TaskContext";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function TaskCard({ tasks }) {
  const { deleteTask } = useTasks();

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {task.title}
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            {task.description}
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={(e) => {
                e.stopPropagation();
                const accept = window.confirm("are you sure");
                if (accept) {
                  deleteTask(task.id);
                  toast.success("task deleted successfully");
                }
              }}
            >
              <div className="text-left">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Delete
                </div>
              </div>
            </button>
            <button>
              <Link
              href={`/edit/${task.id}`}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="button"
            >
              <div className="text-left">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Edit
                </div>
              </div>
            </Link>
            </button>
            
          </div>
        </div>
      ))}
    </div>
  );
}
