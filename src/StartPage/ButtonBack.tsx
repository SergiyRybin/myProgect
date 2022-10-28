import { useNavigate } from "react-router-dom";
import s from "./StartPage.module.css";

interface IButton {
  value?: string ;
  children?: string;
  text?: string;
  className?: string
}

const ButtonBack: React.FC<IButton> = ({ value, text, className }): JSX.Element => {
  if (value === null) {value = "/"}
  if(text === undefined){text = "Go Back"}
  if(className === undefined){className = s.Lin}

  const nav = useNavigate();
  return (
     <button className={className} onClick={() => nav(value!)}>
    {text}
  </button>
    
  );
};

export default ButtonBack;
