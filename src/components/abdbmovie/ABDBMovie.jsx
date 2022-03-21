import "./abdbmovie.scss"
import { FaReact } from "react-icons/fa"
import { BsBootstrap, BsDisplay } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import Footer from "../footer/Footer"

const ABDBMovie = () => {
  return (
    <div className="abdb">
      <h1>ABDB MOVIE APP</h1>
      <div className="img">
        <img src="assets/movielist.png" alt=""></img>
      </div>
      <div className="subtitles">
        <div className="language">
          <div className="titles">
            <h4>Languages & Tools</h4>
          </div>
          <div className="langIcon">
            <div className="icon"><FaReact className="react" /><p>React</p></div>
            <div className="icon"><BsBootstrap className="bootstrap" /><p>Bootstrap</p></div>
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
            <div className="icon"><a href="https://abdb-movie-app.netlify.app/" target="_blank" rel="noreferrer"><BsDisplay /></a></div>
            <div className="icon"><a href="https://github.com/AnilYuksel/MovieAppReact.git" target="_blank" rel="noreferrer"><AiFillGithub /></a></div>
          </div>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <ul>
          <li>ABDB is a movie listing and review application. The name of the app is inspired by IMDB as you can imagine :)</li>
          <li>In the application, the movies in the database are listed and each movie contains its own score, description text and trailer. Each movie has own category and users can list movies by their category.</li>
          <li>Users can access information such as average score, director, movie content of the movies listed in the application. In addition, they can watch the trailers of the movies through the application.</li>
        </ul>
        <h2>Coding</h2>
        <ul>
          <li>This is a front-end react application. React, Context Api, Css, Bootstrap are used in the application.</li>
          <li>The purpose of the application is to improve myself on react and make a creative content</li>
          <li>This application uses context api. While making this application, I learned a lot of new information about using React and Context Api.</li>
          <li>I created a Fake API myself and imported the movie information from there to the app.</li>
          <li>There are so many features that I want to add to the application. First, I will add the backend part and I want an authentication system. I also want users to be able to comment on movies. I imagine a platform where movie lovers can get information about movies and share ideas and argue about movies. That’s why, a backend side will be added to the application.</li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ABDBMovie