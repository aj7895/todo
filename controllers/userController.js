const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

class UserMethods {
  async registerUser(request, response) {
    try {
      const salt = await bcrypt.genSalt(10);
      const { name, username, email, phone, image, password } = request.body;
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        name: name,
        username: username,
        email: email,
        phone: phone,
        image: image,
        password: hashedPassword,
      });
      await newUser.save();
      response.send("user registered successfully");
      console.log("user");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
  async loginUser(request, response) {
    const { username, password } = request.body;
    try {
      const user = await User.findOne({ username });
      const validated = await bcrypt.compare(password, user.password);
      if (validated) {
        const loggedInUser = {
          name: user.name,
          _id: user._id,
          email: user.email,
          image: user.image,
          isAdmin: user.isAdmin,
        };
        response.send(loggedInUser);
      } else {
        return response.status(400).json(error);
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async getAllUsers(request, response) {
    try {
      const users = await User.find();
      response.send(users);
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
  async deleteUser(request, response) {
    try {
      await User.findByIdAndRemove(request.body.userid);
      response.send("user deleted successfully");
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }

  async editUser(request, response) {
    try {
      const { userid, editedValue } = request.body;
      console.log(editedValue);
      await User.findByIdAndUpdate(userid, {
        isAdmin: editedValue,
      });

      response.send("user updated successfully");
    } catch (error) {
      console.log(error);
    }
  }
}

const userController = new UserMethods();
module.exports = userController;
