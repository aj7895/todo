import React, { useState, useEffect } from "react";
import { getAllUsers, editUser } from "../redux/actions/userActions";

import { useDispatch, useSelector } from "react-redux";

const EditUser = ({ userid, setIsModalVisible, isModalVisible }) => {
  console.log(userid);
  const { users } = useSelector((state) => state.getAllUsersReducer);

  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [totalUsers, setTotalUsers] = useState([]);
  useEffect(() => {
    if (users.length == 0) {
      dispatch(getAllUsers());
    } else {
      setTotalUsers(users);
      setUser(users.find((o) => o._id == userid));
    }
  }, [users]);

  const [values, setValues] = useState({
    name: "",
    isAdmin: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(editUser(userid, values));
    setIsModalVisible(false);
  };

  return (
    <div>
      {isModalVisible ? (
        <>
          <div className="z-50 fixed w-full flex justify-center inset-0">
            <div className="w-full bg-white p-10">
              <p className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
                Fill in the data for adding product. It will take a couple of
                minutes.
              </p>
              {user && (
                <div className="mt-8 md:flex items-center">
                  <div className="flex flex-col">
                    <label className="mb-3 text-sm leading-none text-gray-800">
                      Name
                    </label>
                    <input
                      onChange={handleInputs}
                      name="name"
                      value={values.name}
                      type="text"
                      className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                      placeholder={user.name}
                    />
                  </div>
                  <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                    <label className="mb-3 text-sm leading-none text-gray-800">
                      IsAdmin
                    </label>
                    <input
                      onChange={handleInputs}
                      name="isAdmin"
                      value={values.isAdmin}
                      type="text"
                      className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                      placeholder="false / true"
                    />
                  </div>
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                <span className="text-sm font-medium text-center text-gray-800 capitalize">
                  Update
                </span>
                <svg
                  className="mt-1 ml-3"
                  width={12}
                  height={8}
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EditUser;
