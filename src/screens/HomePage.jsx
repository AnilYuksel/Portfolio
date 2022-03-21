import { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import Intro from "../components/intro/Intro"
import Works from "../components/works/Works"
import Contact from "../components/contact/Contact"
import Menu from "../components/menu/Menu"

const HomePage = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

  return (
    <div className="app">
    <Navbar hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></Navbar>
    <Menu hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></Menu>
    <div className="sections">
      <Intro></Intro>
      <Works></Works>
      <Contact></Contact>
    </div>
  </div>
  )
}

export default HomePage