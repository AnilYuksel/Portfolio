import "./netflix.scss"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { BsDisplay } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import { DiMongodb,DiSass } from "react-icons/di"
import Footer from "../footer/Footer"

const Netflix = () => {
  return (
    <div className="netflix">
      <h1>NETFLIX CLONE</h1>
      <div className="img">
        <img src="assets/Netflix.png" alt=""></img>
      </div>
      <div className="subtitles">
        <div className="language">
          <div className="titles">
            <h4>Languages & Tools</h4>
          </div>
          <div className="langIcon">
            <div className="icon"><FaReact className="react" /><p>React</p></div>
            <div className="icon"><SiRedux className="redux" /><p>Redux</p></div>
            <div className="icon"><DiSass className="sass" /><p>SASS</p></div>
            <div className="icon"><FaNodeJs className="node" /><p>Node Js</p><p>Express</p></div>
            <div className="icon"><DiMongodb className="mongo" /><p>MongoDB</p><p>Mongoose</p></div>
          </div>
        </div>
        <div className="appType">
          <div className="type">
            <h4>Application Type</h4>
          </div>
          <div className="typeDesc">
            <p>Design, Front-end, Back-end</p>
          </div>
        </div>
        <div className="appCodes">
          <div className="codes">
            <h4>Application Links</h4>
          </div>
          <div className="linkIcon">
            <div className="icon"><a href="/netflix" target="_blank" rel="noreferrer"><BsDisplay /></a></div>
            <div className="icon"><a href="/netflix" target="_blank" rel="noreferrer"><AiFillGithub /></a></div>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ul>
          <li>It's almost the same movie listing app as Netflix.</li>
          <li>The application is currently under development, I continue to work on it.</li>
          <li>When the application is finished, it will be in a way that users can register or log in and view movies and series.</li>
          <li>In terms of design, it will resemble Netflix as much as possible.</li>
        </ul>
        <h2>Coding</h2>
        <ul>
          <li>Will be upgraded after finish.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Netflix