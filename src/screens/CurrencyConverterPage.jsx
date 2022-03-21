import { useState } from "react"
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"
import CurrencyConverter from "../components/currencyconverter/CurrencyConverter"

const CurrencyConverterPage = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="app">
      <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
      <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
      <div className="sections">
        <CurrencyConverter/>
      </div>
    </div>
  )
}

export default CurrencyConverterPage