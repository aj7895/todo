import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Task from "./pages/Task";
import Users from "./pages/Users";

const App = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      {user && user.isAdmin ? (
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/task" element={<Task />} />
        </Routes>
      ) : user ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
