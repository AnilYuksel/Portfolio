import { useState } from "react"
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"
import ABDBMovie from "../components/abdbmovie/ABDBMovie"


const ABDBMoviePage = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="app">
      <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
      <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
      <div className="sections">
        <ABDBMovie/>
      </div>
    </div>
  )
}

export default ABDBMoviePage