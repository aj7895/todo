import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodoById } from "../redux/actions/todoActions";

const EditTodo = ({ show, setShow, postId }) => {
  const dispatch = useDispatch();
  const getTodo = useSelector((state) => state.getTodoByIdReducer);
  const { todo } = getTodo;

  const [values, setValues] = useState({
    title: "",
    category: "",
    desc: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodoById(postId, values));
    console.log(values);
    setShow(false);
    window.location.reload();
  };

  return (
    <>
      {show && (
        <div className="z-50 fixed w-full flex justify-center inset-0">
          <div className="mx-auto container">
            <div className="flex items-center justify-center h-full w-full">
              <div className="bg-white border-gray-300 border-2 rounded-md shadow-2xl fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                  <p className="text-base font-semibold">Update your Todo</p>
                  <button
                    onClick={() => {
                      setShow(false);
                    }}
                    className="focus:outline-none"
                  >
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7L7 21"
                        stroke="#A1A1AA"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7L21 21"
                        stroke="#A1A1AA"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                  <form className="mt-11">
                    <div className="flex items-center space-x-9">
                      {todo ? (
                        <input
                          name="title"
                          value={values.title}
                          onChange={handleInputs}
                          placeholder={todo.title}
                          className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                        />
                      ) : (
                        <input
                          name="title"
                          placeholder="title"
                          className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                        />
                      )}
                    </div>
                    <div className="flex items-center space-x-9 mt-8">
                      <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                        <select
                          name="category"
                          value={values.category}
                          onChange={handleInputs}
                          className="text-sm text-gray-500 w-full focus:outline-none"
                        >
                          {todo ? (
                            <option selected>{todo.category}</option>
                          ) : (
                            <option selected>category</option>
                          )}
                          <option>Movies</option>
                          <option>Cartoon</option>
                          <option>Designing</option>
                          <option>Developing</option>
                          <option>Music</option>
                          <option>Sports</option>
                          <option>Mics</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-8">
                      {todo ? (
                        <textarea
                          name="desc"
                          value={values.desc}
                          onChange={handleInputs}
                          placeholder={todo.desc}
                          className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                        />
                      ) : (
                        <textarea
                          name="desc"
                          placeholder="description"
                          className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                        />
                      )}
                    </div>
                    <div className="float-right mt-9 mb-2">
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
