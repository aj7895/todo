const Todo = require("../models/todoModel.js");

class TodoMethods {
  async createTodo(request, response) {
    try {
      const { values, user } = request.body;
      console.log(user);
      const newTodo = new Todo({
        title: values.title,
        user: user.name,
        userId: user._id,
        category: values.category,
        desc: values.desc,
      });
      await newTodo.save();
      response.send("Todo created successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async getTodoById(request, response) {
    try {
      const { todoid } = request.body;
      const todo = await Todo.find({ _id: todoid });
      response.send(todo[0]);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
  async getAllTodo(request, response) {
    try {
      const todos = await Todo.find();
      response.send(todos);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async getTodoByUserId(request, response) {
    try {
      const { user } = request.body;
      console.log(user);
      const todos = await Todo.find({ userId: user._id });
      response.send(todos);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async deleteTodoById(request, response) {
    try {
      const { values } = request.body;
      console.log(values);
      await Todo.findByIdAndRemove(values);
      response.send("Todo deleted successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async updateStatus(request, response) {
    try {
      const { todoId } = request.body;
      await Todo.findByIdAndUpdate(todoId, {
        status: false,
      });
      response.send("Todo updated successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async editTodoById(request, response) {
    try {
      const { todoId, values } = request.body;
      await Todo.findByIdAndUpdate(todoId, {
        title: values.title,
        category: values.category,
        desc: values.desc,
      });
      response.send("Todo updated successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async deleteAllTodo(request, response) {
    try {
      const { user } = request.body;
      await Todo.deleteMany({ userID: user._id });
      response.send("all todo deleted successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async deleteAll(request, response) {
    try {
      await Todo.deleteMany();
      response.send("all todo deleted successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}

const todoController = new TodoMethods();
module.exports = todoController;
