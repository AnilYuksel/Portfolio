import React from 'react'
import "./footer.scss"
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer">
    <a href="mailto: anil_yuksel@hotmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
    <a href="https://www.linkedin.com/in/an%C4%B1l-y%C3%BCksel-64b88b181/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
    <a href="https://github.com/AnilYuksel" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
  </div>
  )
}

export default Footer