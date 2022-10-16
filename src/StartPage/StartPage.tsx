import { useNavigate } from "react-router-dom";
import s from "./StartPage.module.css"
const StartPage = () => {
  const nav = useNavigate();

  return (
    <>
      <div>FirstPage</div>
      <button className={s.Back} onClick={() => nav("/1")}>Lesson 1</button>
      <button className={s.Back} onClick={() => nav("/2")}>Lesson 2</button>
      <button className={s.Back} onClick={() => nav("/3")}>Lesson 3</button>
      <button className={s.Back} onClick={() => nav("/5")}>Lesson 5</button>
    </>
  );
};
export default StartPage;
