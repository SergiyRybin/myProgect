import ButtonBack from "./ButtonBack";
import s from "./StartPage.module.css";
const StartPage = () => {
  return (
    <>
      <ButtonBack text={"Lesson 1"} value={"/1"} className={s.Back} />
      <ButtonBack text={"Lesson 2"} value={"/2"} className={s.Back} />
      <ButtonBack text={"Lesson 3"} value={"/3"} className={s.Back} />
      <ButtonBack text={"Lesson 5"} value={"/5"} className={s.Back} />
      <ButtonBack text={"Web"} value={"/web"} className={s.Back} />

    </>
  );
};
export default StartPage;
