const express = require("express");
const app = express();

// DATABASE CONFIG
const connectionConfig = require("./database/connection.js");

// routes
let userRoute = require("./routes/userRoute.js");
let todoRoute = require("./routes/todoRoute.js");

app.use(express.json());
app.use("/api/users/", userRoute);
app.use("/api/todo/", todoRoute);

// FOR DEVELOPMENT
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

// PORT
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
