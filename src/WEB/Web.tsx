import axios from "axios";
import { useState, useEffect } from "react";
import ButtonBack from "../StartPage/ButtonBack";

const Web = () => {
  const [mess, setMess] = useState<any>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    subscribe();
  }, []);

  // Long poling
  // const subscribe = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/connect");
  //     setMess((prev: []) => [data, ...prev]);
  //     await subscribe();
  //   } catch (error) {
  //     setTimeout(() => {
  //       subscribe();
  //     }, 500);
  //   }
  // };

  //event soueser
  const subscribe = async () => {
    const eventSource = new EventSource('http://localhost:5000/connect')
    eventSource.onmessage = function(event){
     const message = JSON.parse(event.data)
      setMess((prev: []) => [message, ...prev])
    }
  }

  const sendMess = async () => {
    await axios.post("http://localhost:5000/new", {
      messege: value,
      id: Date.now(),
    });
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
        {mess.map((m: any, index: any) => (
          <div key={index}>{m.messege}</div>
        ))}
      </div>
    </>
  );
};

export default Web;
