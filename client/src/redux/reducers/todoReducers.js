// CREATE TODO
export const createTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_TODO_REQUEST":
      return {
        loading: true,
      };
    case "CREATE_TODO_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "CREATE_TODO_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// FOR GETTING ALL THE TODO
export const getAllTodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_TODO_REQUEST":
      return {
        loading: true,
      };
    case "GET_ALL_TODO_SUCCESS":
      return {
        todos: action.payload,
        loading: false,
      };
    case "GET_ALL_TODO_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// GETTIG TODO BY ID
export const getTodoByIdReducer = (state = { todo: {} }, action) => {
  switch (action.type) {
    case "GET_TODOBYID_REQUEST":
      return {
        loading: true,
      };
    case "GET_TODOBYID_SUCCESS":
      return {
        todo: action.payload,
        loading: false,
      };
    case "GET_TODOBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// GETTING TODO BY USERID
export const getTodoByUserIdReducer = (state = { userTodos: [] }, action) => {
  switch (action.type) {
    case "GET_TODOBY_USERID_REQUEST":
      return {
        loading: true,
      };
    case "GET_TODOBY_USERID_SUCCESS":
      return {
        userTodos: action.payload,
        loading: false,
      };
    case "GET_TODOBY_USERID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// DELETE TODO BY ID
export const deleteTodoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_TODOBY_ID_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_TODOBY_ID_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELETE_TODOBY_ID_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// EDIT TODO BY ID
export const editTodoByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_TODOBY_ID_REQUEST":
      return {
        loading: true,
      };
    case "EDIT_TODOBY_ID_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "EDIT_TODOBY_ID_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// UPDATE STATUS BY ID
export const updateStatusByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_STATUS_BY_ID_REQUEST":
      return {
        loading: true,
      };
    case "UPDATE_STATUS_BY_ID_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "UPDATE_STATUS_BY_ID_FAILED":
      return {
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

// DELETE ALL TODO BY USER
export const deleteAllTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_ALL_TODO_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_ALL_TODO_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "DELETE_ALL_TODO_FAILED":
      return {
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

// DELETE ALL TODO
export const deleteAllReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_ALL_REQUEST":
      return {
        loading: true,
      };
    case "DELETE_ALL_SUCCESS":
      return {
        success: true,
        loading: false,
      };
    case "DELETE_ALL_FAILED":
      return {
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
