
import Navigatinon from "../../components/NavigationLink/NavLink";
import style from "../NavigationBar/NavBar.module.css";

const NavBar = ({ children }) => {
  return (
    <header className={style.NavBar}>
      {children}
      <Navigatinon />
    </header>
  );
};

export default NavBar;
