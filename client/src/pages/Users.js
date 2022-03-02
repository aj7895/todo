import React, { useState, useEffect } from "react";
import {
  getAllUsers,
  deleteUser,
  editUser,
} from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const [status, setStatus] = useState(false);
  const getUsers = useSelector((state) => state.getAllUsersReducer);
  const { users } = getUsers;

  return (
    <div className="pt-14">
      <div>
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-400">
                Users
              </p>
            </div>
          </div>

          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Users</th>
                  <th className="font-normal text-left pl-12">Username</th>
                  <th className="font-normal text-left pl-16">Email address</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {users &&
                  users.map((user) => (
                    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img
                              className="w-full h-full rounded"
                              src={user.image}
                            />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium">{user.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {user.username}
                        </p>
                      </td>
                      <td className="pl-16">
                        <div className="flex items-center">
                          <p className="text-sm font-medium leading-none text-gray-800">
                            {user.email}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-1/2 bg-blue-400 border text-white rounded border-gray-200 py-2.5 px-3">
                          <form
                            onSubmit={() => {
                              dispatch(editUser(user._id, status));
                            }}
                          >
                            <button
                              type="submit"
                              className=""
                              onClick={() => {
                                user.isAdmin
                                  ? setStatus(false)
                                  : setStatus(true);
                              }}
                              className=""
                            >
                              {user && user.isAdmin ? "Admin" : "User"}
                            </button>
                          </form>
                        </div>
                      </td>
                      <td className="px-7 2xl:px-0">
                        <button
                          onClick={() => {
                            if (user && !user.isAdmin) {
                              dispatch(deleteUser(user._id));
                            } else {
                            }
                          }}
                          className="hover:text-red-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
