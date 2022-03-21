import "./intro.scss"
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, { showCursor: false, backDelay: 1500, backSpeed: 60, strings: ['Developer', 'Designer'] })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left"></div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Anıl Yüksel</h1>
          <h3>Frontend <span ref={textRef}></span></h3>
          <div className="icons">
            <a href="mailto: anil_yuksel@hotmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
            <a href="https://www.linkedin.com/in/anil-yuksel-94-web/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/AnilYuksel" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
          </div>
        </div>
        <a href="#works" className="arrow"><IoIosArrowDown ></IoIosArrowDown></a>
      </div>
    </div>
  )
}

export default Intro