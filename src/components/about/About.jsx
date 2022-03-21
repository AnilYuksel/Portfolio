import React from "react";
import "./about.scss";
import Footer from "../footer/Footer"

const About = () => {
  return (
    <div className="about">
      <div>
        <h1>ABOUT</h1>
      </div>
      <div className="content">
        <img src="assets/about.jfif" alt=""></img>
        <p>Anil Yuksel is a <b>front-end web developer</b> currently focusing on <b>React</b>.</p>
        <p>He started his web design and development journey as a hobby, then he decided to continue as a professional. Followed by, he has studied web design and development in Canada.</p>
        <p>He is <b>well-organized, goal-oriented and punctual</b> person. Also, he has always been open to criticism and new ideas. Therefore, he will be a <b>good teammate</b> professionally.</p>
        <p>in order to both improve himself and to be effective employee, he wants to step into the professional web development </p>
        <p>Coding is always renewing itself, so there is no limit to learning.</p>
        <h4>Skills</h4>
        <p>JavaScript, React, Redux, Node, Express, MongoDB, Mongoose, HTML/CSS, SASS, Bootstrap, Git, GitHub.</p>
        <h4>Personality Traits</h4>
        <p>Punctual, determined, goal-oriented, well-organized, hardworking, open-minded.</p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
