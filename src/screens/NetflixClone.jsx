import Netflix from "../components/netflix/Netflix"
import { useState } from "react"
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"

const NetflixClone = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

  return (
    <div className="app">
    <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
    <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
    <div className="sections">
      <Netflix/>
    </div>
  </div>
  )
}

export default NetflixClone