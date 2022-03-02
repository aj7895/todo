import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  getTodoByUserId,
  deleteTodoById,
  getTodoById,
  updateStatusById,
  deleteAllTodo,
} from "../redux/actions/todoActions";
import EditTodo from "./EditTodo";
const Todos = () => {
  const notify = (message) => toast(message);

  const getTodoByUser = useSelector((state) => state.getTodoByUserIdReducer);
  const { userTodos } = getTodoByUser;
  const [show, setShow] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [id, setId] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoByUserId(user));
  }, []);

  // DELETING TODO
  const handleDelete = () => {
    dispatch(deleteTodoById(id));
    window.location.reload();
    if (selectAll) {
      dispatch(deleteAllTodo(user));
      notify("All todo deleted successfully");
    }
  };

  // EDITING TODO
  const handleEdit = () => {
    setShow(true);
    dispatch(getTodoById(id));
    if (selectAll) {
      setShow(false);
      notify("you cant edit all item at once!");
    }
  };

  // HANDLING STATUS OF TASK ACTIVE OR COMPLETED
  const handleStatus = () => {
    dispatch(updateStatusById(id));
    window.location.reload();
  };
  return (
    <div className="py-20">
      <ToastContainer />
      <div className="mx-auto container bg-white shadow rounded">
        <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
          <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex items-center">
              <button
                onClick={handleEdit}
                className="text-gray-600 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-edit"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1={16} y1={5} x2={19} y2={8} />
                </svg>
              </button>
              <button
                onClick={handleStatus}
                className="text-gray-600 mx-2 p-2 border-transparent border bg-gray-100  hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </button>
              <button
                onClick={handleDelete}
                className="text-red-500 p-2 border-transparent border bg-gray-100 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-trash"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={7} x2={20} y2={7} />
                  <line x1={10} y1={11} x2={10} y2={17} />
                  <line x1={14} y1={11} x2={14} y2={17} />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  <input
                    type="checkbox"
                    className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                    onClick={() => {
                      !selectAll ? setSelectAll(true) : setSelectAll(false);
                    }}
                  />
                </th>
                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Title
                </th>
                <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Created at
                </th>
                <th className="text-gray-600  font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Status
                </th>
                <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
                </th>
              </tr>
            </thead>
            <tbody>
              {userTodos &&
                userTodos.map((item) => (
                  <tr className="h-24 border-gray-300 border-b" key={item._id}>
                    <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {selectAll ? (
                        <input
                          type="checkbox"
                          checked
                          className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                        />
                      ) : (
                        <input
                          type="checkbox"
                          className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                          onClick={() => {
                            setId(item._id);
                          }}
                        />
                      )}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                      {item.title}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                      {item.createdAt.substring(0, 10)}
                    </td>
                    <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">
                      {item.status === true ? <p>Active</p> : <p>Completed</p>}
                    </td>
                    <td>
                      <div
                        className={
                          item.status === true
                            ? "bg-indigo-400 w-2 h-2 flex items-center justify-center rounded-full "
                            : "w-2 h-2 flex items-center justify-center rounded-full bg-green-400"
                        }
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <EditTodo show={show} setShow={setShow} postId={id} />
    </div>
  );
};
export default Todos;
