const express = require("express");

const app = express();

//1- parse the data
app.use(express.json());

let users = [
  { name: "Skander", age: 25, id: 1 },
  { name: "Hichem", age: 35, id: 2 },
  { name: "Rchid", age: 10, id: 3 },
];

console.log(users);

//Get all users
//Get "/users"
//@desc: get list of users
app.get("/users", (req, res) => {
  // res.send(users)
  res.status(200).json(users);
});

//Add new user
//Post "/users"
//@desc: Add new user
app.post("/users", (req, res) => {
  let newUser = { ...req.body, id: Math.random() };
  users.push(newUser);
  res.status(200).json({
    msg: "User added with success",
    users,
  });
});

//Delete user
//Delete '/users/:id'
//@Desc: delete user with id
app.delete("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.filter((el) => el.id !== id);
  res.status(200).json({
    msg: "User has been deleted",
    users,
  });
});

//Update user
//Update '/users/:id'
//@Desc: update user with id
app.put("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  users = users.map((el) => (el.id === id ? { ...el, ...req.body } : el));
  res.status(200).json({
    msg: "User has been updated",
    users,
  });
});

const port = process.env.PORT || 6000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});
