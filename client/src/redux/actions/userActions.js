import axios from "axios";

// REGISTERING NEW USER
export const registerUser = (values) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  await axios
    .post("/api/users/register", values)
    .then((response) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
      window.location.href = "/login";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "USER_REGISTER_FAILED" });
    });
};

// LOGIN USER
export const loginUser = (values) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  await axios
    .post("/api/users/login", values)
    .then((response) => {
      dispatch({ type: "USER_LOGIN_SUCCESS" });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "USER_LOGIN_FAILED" });
    });
};

// LOGOUT USER
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  dispatch({ type: "USER_LOGOUT" });
  window.location.href = "/login";
};

// GET ALL THE USERS
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_ALLUSERS_REQUEST" });
  await axios
    .get("/api/users/getallusers")
    .then((response) => {
      dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_ALLUSERS_FAILED" });
    });
};

// DELETING ALL THE USERS
export const deleteUser = (userid) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  await axios
    .post("/api/users/deleteuser", { userid })
    .then((response) => {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: response.data });
      window.location.href = "/admin/users";
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "DELETE_USER_FAILED", payload: error });
    });
};

// SET TYPE OF USER
export const editUser = (userid, editedValue) => async (dispatch) => {
  dispatch({ type: "USER_EDIT_REQUEST" });
  await axios
    .post("/api/users/edituser", {
      userid,
      editedValue,
    })
    .then((response) => {
      dispatch({ type: "USER_EDIT_SUCCESS" });
      window.location.reload();
    })
    .catch((error) => {
      dispatch({ type: "USER_EDIT_FAILED" });
    });
};
