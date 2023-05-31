const express = require('express');
// const bodyParser = require("bodyParser")
const User = require("./Shema")
const connect = require("./db")

const app = express();
const port = 4000;

app.use(express.json())
connect()

app.get("/", (req, res)=>{
  res.send("hello")
})

app.post("/create", async (req, res)=>{
  console.log(req.body)
  const {name} = req.body;
  let user = {
    name:name
  }
  await User.create(user)
  res.send(user)
})

app.put("/update/:id", async (req, res)=>{
  const id = req.params.id;
  const {name} = req.body;
  let data = {
    name:name
  }
  await User.findByIdAndUpdate(id, data)
  res.send(data)
})

app.delete("/delete/:id", async (req, res)=>{
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.send("deleted")
})

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});