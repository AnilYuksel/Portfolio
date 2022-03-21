import { useState } from "react"
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"
import WeatherApp from "../components/weather/WeatherApp"

const WeatherAppPage = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="app">
      <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
      <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
      <div className="sections">
        <WeatherApp/>
      </div>
    </div>
  )
}

export default WeatherAppPage