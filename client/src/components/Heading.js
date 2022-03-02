import React, { useState } from "react";
import CreateTodo from "./CreateTodo";

const Heading = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-gray-800">
            Todos
          </h4>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            onClick={() => {
              setShow(true);
            }}
            className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
          >
            Add todo
          </button>
        </div>
      </div>
      <CreateTodo show={show} setShow={setShow} />
    </div>
  );
};

export default Heading;
