import "./blognode.scss"
import {FaNodeJs } from "react-icons/fa"
import {BsBootstrap,BsDisplay} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {DiMongodb} from "react-icons/di"
import Footer from "../footer/Footer"

const BlogNode = () => {
  return (
    <div className="blognode">
      <h1>BLOG APP WITH NODE JS</h1>
      <div className="img">
        <img src="assets/nodeblog.png" alt=""></img>
      </div>
      <div className="subtitles">
        <div className="language">
          <div className="titles">
            <h4>Languages & Tools</h4>
          </div>
          <div className="langIcon">
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
            <div className="icon"><a href="https://blogapp-full-nodejs.herokuapp.com" target="_blank" rel="noreferrer"><BsDisplay/></a></div>
              <div className="icon"><a href="https://github.com/AnilYuksel/NodeJsBlog.git" target="_blank" rel="noreferrer" ><AiFillGithub/></a></div>
            </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ul>
          <li>This is a kind of blog application. People can share their own ideas or read and comment on other people's posts. </li>
          <li>The application has an authentication system. Users who are members can share, edit and delete their posts.  It is possible to use the application without being a member. But non-members can only view other posts. They cannot share posts. </li>
          <li>After the user is logged in, the logout button comes instead of the sign in the navigation bar, and the logged in users will be able to edit and delete their own posts.</li>
          <li>There is a search bar in the home screen of the application and users can search posts by post titles and this app has pagination system in the home page.</li>
        </ul> 
          <h2>Coding</h2> 
        <ul>
          <li>This application was build with Bootstrap, Node, Express, MongoDB, Mongoose.</li>  
          <li>I used bootstrap and CSS in the design part of the application, because my priority while making this application was understanding how to work CRUD operations in Node js.</li>  
          <li>The application uses the Mongodb database, and the created posts and the information of the users are stored in Mongodb.</li>  
          <li>When a user logs in to the membership system, their information is stored through Cookies. Users get an access token, and this access token is constantly renewed for a certain period. When the user logs out, his token becomes invalid, and his information is deleted from the cookie and local storage.</li> 
          <li>This application was made with NodeJs to better understand the working logic of the applications on the server side. I learned important information about using NodeJs during the developing phase of this application and it was an important step for me to improve myself.</li> 
        </ul> 
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogNode