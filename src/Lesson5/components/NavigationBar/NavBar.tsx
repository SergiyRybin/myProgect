import Navigatinon from "../NavigationLink/NavLink";
import style from "../NavigationBar/NavBar.module.css";

interface InavBar {
  children?: JSX.Element;
}

function NavBar({ children }: InavBar): JSX.Element {
  return (
    <header className={style.NavBar}>
      {children}
      <Navigatinon />
    </header>
  );
}

export default NavBar;
