import React from 'react'
import { useState } from "react"
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"
import WorksOut from "../components/works/WorksOut"

const WorksPage = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="app">
    <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
    <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
    <div className="sections">
      <WorksOut></WorksOut>
    </div>
  </div>
  )
}

export default WorksPage