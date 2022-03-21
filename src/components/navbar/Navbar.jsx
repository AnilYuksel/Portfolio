import "./navbar.scss"
import { Link } from "react-router-dom"

const Navbar = ({ hamburgerOpen, setHamburgerOpen}) => {

  return (
    <div className={"navbar " + (hamburgerOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"><img src="assets/Logo.png" alt=""></img></a>
        </div>
        <div className="right">
          <div className="hamburgerNone">
            <ul>
              <li>
                <a className="home" href="#intro">HOME</a>
              </li>
              <li >
                <Link to="/works" className="works" >WORKS</Link>
              </li>
              <li >
                <Link className="about" to="/about">ABOUT</Link>
              </li>
              <li >
                <a className="contact" href="#contact">CONTACT</a>
              </li>
              <li >
                <a className="resume" href="/assets/Resume.pdf" download>RESUME</a>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar