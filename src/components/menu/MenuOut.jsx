import "./menu.scss";
import { Link } from "react-router-dom";

const MenuOut = ({ hamburgerOpen, setHamburgerOpen }) => {

    const closeHamburger = () => {
        setHamburgerOpen(false)
    }

  return (
    <div className={"menu " + (hamburgerOpen && "active")}>
      <ul>
        <li onClick={closeHamburger}>
          <Link to="/">HOME</Link>
        </li>
        <li onClick={closeHamburger}>
          <Link to="/works">WORKS</Link>
        </li>
        <li onClick={closeHamburger}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li onClick={closeHamburger}>
          <a href="#resume">RESUME</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuOut
