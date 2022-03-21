import { useState } from "react"
import NavbarOut from "../components/navbar/NavbarOut"
import MenuOut from "../components/menu/MenuOut"
import BlogNode from "../components/blognode/BlogNode"

const BlogNodePage = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="app">
      <NavbarOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></NavbarOut>
      <MenuOut hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}></MenuOut>
      <div className="sections">
        <BlogNode/>
      </div>
    </div>
  )
}

export default BlogNodePage