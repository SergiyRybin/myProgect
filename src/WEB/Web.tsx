import axios from "axios";
import { useState, useEffect } from "react";
import ButtonBack from "../StartPage/ButtonBack";

const Web = () => {
  const [mess, setMess] = useState<any>([]);
  const [value, setValue] = useState("");

  const sendMess = async () => {
    const date = new Date()
    await axios.post("http://localhost:5000/new", {
      messege: value,
      id: date.toISOString()
    });
  };

  useEffect(() => {
    subscribe();
  }, [])

  const subscribe = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/get");
      setMess((prev: any) => [data, ...prev]);
      await subscribe();
    } catch (error) {
      setTimeout(() => {
        subscribe();
      }, 500);
    }
  };

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
        {mess.map((m: any) => (
          <div key={m.id}>{m.messege} {m.id}</div>
        ))}
      </div>
    </>
  );
};

export default Web;
