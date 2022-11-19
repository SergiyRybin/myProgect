const ws = require("ws");

const wss = new ws.Server(
  {
    port: 5000,
  },
  () => console.log(`Server start on 5000`)
);

wss.on("connection", function connection(ws) {
  // ws.send("пользователь подкл")
  // ws.id = Date.now() для приватних кімнат
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadcast(message);
        break;
      // можна зробити якесь привітання якщо хтось підключився
      case "connection":
        broadcast(message);
        break;
      default:
        break;
    }
  });
});
//функія для оповіщення
function broadcast(message) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}


