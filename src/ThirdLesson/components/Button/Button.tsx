import s from "../Button/Button.module.css";

interface IButton {
  onClick(): void;
  text: string;
}

const Button: React.FC<IButton> = ({ onClick, text }) => {
  return (
    <>
      <button type="button" className={s.Button} onClick={onClick}>
        {text}
      </button>
    </>
  );
};


export default Button;
