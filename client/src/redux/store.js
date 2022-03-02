import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// USER REDUCERS
import {
  userRegisterReducer,
  userLoginReducer,
  editUserReducer,
  deleteUserReducer,
  getAllUsersReducer,
} from "./reducers/userReducers";

// TODO REDUCERS
import {
  createTodoReducer,
  getTodoByUserIdReducer,
  deleteTodoByIdReducer,
  getTodoByIdReducer,
  getAllTodoReducer,
  updateStatusByIdReducer,
  deleteAllReducer,
} from "../redux/reducers/todoReducers";

const composeEnhancers = composeWithDevTools({});

// CURRENT USER
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

// INITIAL STATE
const initialState = {
  userLoginReducer: { currentUser },
};

// FINAL REDUCER
const finalReducer = combineReducers({
  userRegisterReducer,
  userLoginReducer,
  editUserReducer,
  deleteUserReducer,
  getAllUsersReducer,
  createTodoReducer,
  getTodoByUserIdReducer,
  getTodoByIdReducer,
  getAllTodoReducer,
  deleteTodoByIdReducer,
  updateStatusByIdReducer,
  deleteAllReducer,
});

// CREATING STORE
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
