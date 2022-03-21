import "./currencyconverter.scss"
import { SiJavascript } from "react-icons/si"
import { BsBootstrap} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import Footer from "../footer/Footer"

const CurrencyConverter = () => {
  return (
    <div className="currency">
      <h1>CURRENCY CONVERTER</h1>
      <div className="img">
        <img src="assets/currency.png" alt=""></img>
      </div>
      <div className="subtitles">
        <div className="language">
          <div className="titles">
            <h4>Languages & Tools</h4>
          </div>
          <div className="langIcon">
            <div className="icon"><SiJavascript className="js"/><p>JavaScript</p></div>
            <div className="icon"><BsBootstrap className="bootstrap"/><p>Bootstrap</p></div>
          </div>
        </div>
        <div className="appType">
          <div className="type">
            <h4>Application Type</h4>
          </div>
          <div className="typeDesc">
            <p>Front-end</p>
          </div>
        </div>
        <div className="appCodes">
            <div className="codes">
              <h4>Application Links</h4>
            </div>
            <div className="linkIcon"> 
              <div className="icon"><a href="https://github.com/AnilYuksel/Exchange-CurrencyAsync.git" target="_blank" rel="noreferrer"><AiFillGithub/></a></div>
            </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ul>
          <li>A very basic level money converter application made using Javascript and the exchange API.</li>
          <li>The purpose of this application was to learn the use of Api and improve the use of javascript. Therefore, the design part was not taken care of.</li>
          <li>The application calculates the value of the selected currency according to current value of Euro with using exchange API.</li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default CurrencyConverter