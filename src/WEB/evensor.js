const express = require("express");
const cors = require("cors");
const events = require("events");
const PORT = 5000;

const emitter = new events.EventEmitter();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/connect", (req, res) => {
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cash-Control": "no-cash",
  });
  emitter.on("newMessage", (message)=>{
    res.write(`data: ${JSON.stringify(message)} \n\n`)
  });
});

app.post("/new", (req, res) => {
  const mess = req.body;
  emitter.emit("newMessage", mess);
  res.status(200);
});

app.listen(PORT, () => console.log(`server start ${PORT}`));
