import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ButtonBack from "../StartPage/ButtonBack";

const WebSock = () => {
  const [mess, setMess] = useState([]);
  const [value, setValue] = useState("");
  const socket = useRef();
  const [connect, setConnect] = useState(false);
  const [username, setUsername] = useState("");

  const sendMess = async () => {
    const message = {
      username,
      message: value,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message))
    setValue('')
  };

  function con() {
    socket.current = new WebSocket("ws://localhost:5000/");
    socket.current.onopen = () => {
      setConnect(true);
      const message = {
        event: "connection",
        id: Date.now(),
        date: "123",
        username,
        message: "hell",
      };
      socket.current.send(JSON.stringify(message));
      console.log("Yep done");
    };
    socket.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMess((prev) => [message, ...prev]);
    };
    socket.current.onclose = () => {
      console.log("close");
    };
    socket.current.onerror = () => {
      console.log("error");
    };
  }

  if (!connect) {
    return (
      <div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="імя"
        />
        <button onClick={con}>Login</button>
      </div>
    );
  }
  return (
    <>
      <div>
        <ButtonBack />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={sendMess}>Send</button>
      </div>
      <div>
        {mess.map((m, index) => (
          <div key={index}>
            {m.event === "connection" ? (
              <div>User {m.username} connected</div>
            ) : (
              <div>
                {m.username}.{m.message}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default WebSock;
