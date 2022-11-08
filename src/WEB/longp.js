const express = require("express");
const cors = require("cors");
const events = require("events");
const PORT = 5000;

const emitter = new events.EventEmitter();
const app = express();

app.use(cors());
app.use(express.json())

app.get("/get", (req, res) => {
  emitter.once("newMessage", (mess) => {
    res.json(mess);
  });
});

app.post("/new", (req, res) => {
  const mess = req.body;
  emitter.emit("newMessage", mess);
  res.status(200);
});

app.listen(PORT, () => console.log(`server start ${PORT}`));
