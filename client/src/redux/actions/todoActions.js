import axios from "axios";

// CREATE TODO
export const createTodo = (values) => async (dispatch, getState) => {
  const user = getState().userLoginReducer.currentUser;
  console.log(user);
  dispatch({ type: "CREATE_TODO_REQUEST" });
  await axios
    .post("/api/todo/create", { values, user })
    .then((response) => {
      dispatch({ type: "CREATE_TODO_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "CREATE_TODO_FAILED", payload: error });
    });
};

// FOR GETTING ALL THE TODO
export const getAllTodo = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_TODO_REQUEST" });
  await axios
    .get("/api/todo/getalltodo")
    .then((response) => {
      dispatch({ type: "GET_ALL_TODO_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "GET_ALL_TODO_FAILED", payload: error });
    });
};

// GET TODO BY ID
export const getTodoById = (todoid) => async (dispatch) => {
  dispatch({ type: "GET_TODOBYID_REQUEST" });
  await axios
    .post("/api/todo/gettodobyid", { todoid })
    .then((response) => {
      dispatch({ type: "GET_TODOBYID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_TODOTBYID_FAILED", payload: error });
      console.log(error);
    });
};

// VIEWING ALL TODO BY USERID
export const getTodoByUserId = (user) => async (dispatch) => {
  dispatch({ type: "GET_TODOBY_USERID_REQUEST" });
  await axios
    .post("/api/todo/gettodobyuserid", { user })
    .then((response) => {
      dispatch({ type: "GET_TODOBY_USERID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_TODOBY_USERID_FAILED", payload: error });
      console.log(error);
    });
};

// EDIT TODO
export const editTodoById = (todoId, values) => async (dispatch) => {
  dispatch({ type: "EDIT_TODOBY_ID_REQUEST" });
  await axios
    .post("/api/todo/edittodobyid", { todoId, values })
    .then((response) => {
      dispatch({ type: "EDIT_TODOBY_ID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "EDIT_TODOBY_ID_FAILED", payload: error });
      console.log(error);
    });
};

// UPDATE STATUS OF TODO
export const updateStatusById = (todoId) => async (dispatch) => {
  dispatch({ type: "UPDATE_STATUS_BY_ID_REQUEST" });
  await axios
    .post("/api/todo/updatestatusbyid", { todoId })
    .then((response) => {
      dispatch({ type: "UPDATE_STATUS_BY_ID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "UPDATE_STATUS_BY_ID_FAILED", payload: error });
      console.log(error);
    });
};

// DELETE ALL TODO BY USER
export const deleteAllTodo = (user) => async (dispatch) => {
  dispatch({ type: "DELETE_ALL_TODO_REQUEST" });
  await axios
    .post("/api/todo/deletealltodo", { user: user })
    .then((response) => {
      dispatch({ type: "DELETE_ALL_TODO_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "DELETE_ALL_TODO_FAILED", payload: error });
      console.log(error);
    });
};

// DELETE ALL TODO
export const deleteAll = () => async (dispatch) => {
  dispatch({ type: "DELETE_ALL_REQUEST" });
  await axios
    .post("/api/todo/deleteall")
    .then((response) => {
      dispatch({ type: "DELETE_ALL_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "DELETE_ALL_FAILED", payload: error });
      console.log(error);
    });
};

// DELETE TODO BY ID
export const deleteTodoById = (values) => async (dispatch) => {
  dispatch({ type: "DELETE_TODOBY_ID_REQUEST" });
  await axios
    .post("/api/todo/deletetodobyid", { values })
    .then((response) => {
      dispatch({ type: "DELETE_TODOBY_ID_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "DELETE_TODOBY_ID_FAILED", payload: error });
      console.log(error);
    });
};
