import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const notify = (message) => toast(message);
  const [values, setValues] = useState({
    name: "",
    image: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  // HANDLING REGISTRATION OF USER ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.password == values.confirmpassword &&
      validator.isEmail(values.email)
    ) {
      dispatch(registerUser(values));
      notify("User registration successfully");
    } else {
      notify("User registration failed");
    }
  };
  const [show, setShow] = useState(true);
  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center">
        <div className="xl:w-10/12 w-full px-8">
          <div className="xl:px-24">
            {show && (
              <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-800 pl-3">
                    We take privacy issues seriously. You can be sure that your
                    personal data is securely protected.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShow(false);
                  }}
                  className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded"
                >
                  <svg
                    aria-label="Close this banner"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z"
                      fill="#79808F"
                    />
                  </svg>
                </button>
              </div>
            )}
            <form>
              <div className="mt-16 lg:flex flex-col items-center justify-between border-b border-gray-200 pb-16">
                <div className="w-80">
                  <Link
                    className="flex pt-3 pb-20 underline text-blue-300"
                    to="/login"
                  >
                    Click here if you already have an account
                  </Link>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label className="text-sm leading-none text-gray-800">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleInputs}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="John"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label className="text-sm leading-none text-gray-800">
                        Image
                      </label>
                      <input
                        name="image"
                        value={values.image}
                        onChange={handleInputs}
                        type="text"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="image url"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label className="text-sm leading-none text-gray-800">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleInputs}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="John"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="phone"
                      >
                        Phone number
                      </label>
                      <input
                        name="phone"
                        value={values.phone}
                        onChange={handleInputs}
                        type="text"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="123456791"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleInputs}
                        type="email"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="john@mail.com"
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="md:flex items-center lg:ml-24 lg:mt-8 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="password"
                      >
                        Password
                      </label>
                      <input
                        name="password"
                        value={values.password}
                        onChange={handleInputs}
                        type="name"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        id="securityCode"
                      >
                        Confirm password
                      </label>
                      <input
                        type="name"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleInputs}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  onClick={handleSubmit}
                  className="my-7 float-right rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
