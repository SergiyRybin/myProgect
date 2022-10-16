import Navigatinon from "../NavigationLink/NavLink";
import style from "../NavigationBar/NavBar.module.css";
import { ReactElement } from "react";

interface InavBar {
  children: ReactElement;
}

function NavBar({ children }: InavBar): ReactElement {
  return (
    <header className={style.NavBar}>
      {children}
      <Navigatinon />
    </header>
  );
}

export default NavBar;
