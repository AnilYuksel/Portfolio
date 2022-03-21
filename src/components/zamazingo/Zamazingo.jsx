import "./zamazingo.scss"
import { FaReact, FaNodeJs } from "react-icons/fa"
import {SiRedux} from "react-icons/si"
import {BsBootstrap,BsDisplay} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {DiMongodb} from "react-icons/di"
import Footer from "../footer/Footer"

const Zamazingo = () => {
  return (
    <div className="zamazingo">
      <h1>BLOG APP 'ZAMAZINGO'</h1>
      <div className="img">
        <img src="assets/zamazingo1.png" alt=""></img>
      </div>   
      <div className="subtitles">
        <div className="language">
          <div className="titles">
            <h4>Languages & Tools</h4>
          </div>
          <div className="langIcon">
            <div className="icon"><FaReact className="react"/><p>React</p></div>
            <div className="icon"><SiRedux className="redux"/><p>Redux</p></div>
            <div className="icon"><BsBootstrap className="bootstrap"/><p>Bootstrap</p></div>
            <div className="icon"><FaNodeJs className="node"/><p>Node Js</p><p>Express</p></div>
            <div className="icon"><DiMongodb className="mongo"/><p>MongoDB</p><p>Mongoose</p></div>
          </div>
        </div>
        <div className="appType">
          <div className="type">
            <h4>Application Type</h4>
          </div>
          <div className="typeDesc">
            <p>Design, Front-end, Backend</p>
          </div>
        </div>
        <div className="appCodes">
            <div className="codes">
              <h4>Application Links</h4>
            </div>
            <div className="linkIcon"> 
              <div className="icon"><a href="https://zamazingo.netlify.app/" target="_blank" rel="noreferrer"><BsDisplay/></a></div>
              <div className="icon"><a href="https://github.com/AnilYuksel/Blog-Project-Mern.git" target="_blank" rel="noreferrer"><AiFillGithub/></a></div>
            </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ul>
          <li>Zamazingo is a kind of Blog app. In the application, people can share their own ideas or read and comment on other people's posts.</li>
          <li>The application has an authentication system. Users who are members can share, edit and delete their posts. Also, they can comment to other`s or own posts. It is possible to use the application without being a member. But non-members can only view other’s posts. They cannot share something.</li>
          <li>In addition, users can send me an email by filling out the form on the contact page of the application. Membership is not required for this feature.</li>
          <li>After the user is logged in, the logout button comes instead of the sign in the navigation bar, and the logged in users will be able to see the edit and delete buttons under their own posts.</li>
          <li>There is a search bar in the home screen of the application and users can search posts by post titles.</li>
        </ul> 
          <h2>Coding</h2> 
        <ul>
          <li>This is a full-stack MERN application build with React, Redux, CSS, Bootstrap for a client side and Node, Express, MongoDB, Mongoose, JWT for a server side.</li>  
          <li>App was designed with bootstrap and CSS in the design part, because my priority while making this application was to improve myself in terms of CRUD and membership system more than the design part and Bootstrap makes things easier.</li>  
          <li>The application uses the Mongo database, and the created posts and the information of the users are stored in Mongodb.</li>  
          <li>When a user logs in to the membership system, their information is stored through Cookies. Users get an access token, and this access token is constantly renewed for a certain period. When the user logs out, his token becomes invalid, and his information is deleted from the cookie and local storage.</li> 
          <li>As I mentioned before, there are CRUD operations such as post, put, delete, get in the application.</li> 
          <li>I learned a lot of new information during the developing phase of this application, as I improve myself, I want to add new actions to the application both in design and in the backend part.</li> 
        </ul> 
      </div>
      <Footer/>
    </div>
  )
}

export default Zamazingo