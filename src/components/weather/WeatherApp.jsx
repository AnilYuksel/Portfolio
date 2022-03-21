import "./weatherApp.scss";
import { FaReact} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {BsDisplay} from "react-icons/bs"
import Footer from "../footer/Footer"


const WeatherApp = () => {
  return (
    <div className="portfolio">
      <h1>WHEATHER APP</h1>
      <div className="img">
        <img src="assets/weather.png" alt=""></img>
      </div>
      <div className="subtitles">
        <div className="language">
          <div className="titles">
            <h4>Languages & Tools</h4>
          </div>
          <div className="langIcon">
            <div className="icon"><FaReact className="react"/><p>React</p></div>
          </div>
        </div>
        <div className="appType">
          <div className="type">
            <h4>Application Type</h4>
          </div>
          <div className="typeDesc">
            <p>Design, Front-end</p>
          </div>
        </div>
        <div className="appCodes">
            <div className="codes">
              <h4>Application Links</h4>
            </div>
            <div className="linkIcon"> 
              <div className="icon"><a href="https://wheatherofyourlocation.netlify.app/" target="_blank" rel="noreferrer"><BsDisplay/></a></div>
              <div className="icon"><a href="https://github.com/AnilYuksel/Wheather_Project.git" target="_blank" rel="noreferrer"><AiFillGithub/></a></div>
            </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ul>
          <li>This is a simple wheather application. It is a project that I designed to learn new information about React.</li>
          <li>This is a single page wheather application. It shows the weather conditions of where you are.</li>
        </ul> 
          <h2>Coding</h2> 
        <ul>
          <li>React and CSS are used in this project. </li>  
          <li>It has been a project where I learned new information and refreshed my knowledge.</li>
          <li>I used real API for this project and I learned how can I use a real api.</li>    
        </ul> 
      </div>
      <Footer/>
    </div>
  )
}

export default WeatherApp