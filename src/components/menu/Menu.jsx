import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ hamburgerOpen, setHamburgerOpen }) => {

    const closeHamburger = () => {
        setHamburgerOpen(false)
    }

  return (
    <div className={"menu " + (hamburgerOpen && "active")}>
      <ul>
        <li onClick={closeHamburger}>
          <Link to="/" href="#intro">HOME</Link>
        </li>
        <li onClick={closeHamburger}>
          <a href="#works">WORKS</a>
        </li>
        <li onClick={closeHamburger}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li onClick={closeHamburger}>
          <a href="#contact">CONTACT</a>
        </li>
        <li onClick={closeHamburger}>
          <a href="#resume">RESUME</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
