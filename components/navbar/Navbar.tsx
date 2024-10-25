import styles from "./NavBar.module.css";
import { NavItem } from "../../interfaces";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems: NavItem[] = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
];

export const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        {navItems.map((item, i) => {
          return (
             <ActiveLink path={item.path} text={item.text} key={i}  />
          );
        })}
      </nav>
    </>
  );
};
