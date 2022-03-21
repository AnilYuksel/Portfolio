import { useState } from "react"
import About from '../components/about/About'
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"

const AboutPage = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  return (
    <div className="app">
      <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
      <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
      <div className="sections">
        <About />
      </div>

    </div>
  )
}

export default AboutPage