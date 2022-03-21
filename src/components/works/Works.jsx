import { Link } from "react-router-dom";
import "./works.scss";
import {BsPlus} from "react-icons/bs"

const Works = () => {
  return (
    <div className="works" id="works">
      <h1>WORKS</h1>
      <div className="main">
        <Link to="/zamazingo">
          <div className="item">
            <img src="assets/zamazingo1.png" alt=""></img>
            <div className="hover">
              <BsPlus/>
            <h3>ZAMAZINGO</h3>
            </div>
          </div>
        </Link>
        <Link to="/blognode">
          <div className="item">
            <img src="assets/nodeblog.png" alt=""></img>
            <div className="hover">
              <BsPlus/>
            <h3>NODE JS BLOG APP</h3>
            </div>
          </div>
        </Link>
        <Link to="/abdbmovie">
          <div className="item"><img src="assets/movielist.png" alt=""></img>
          <div className="hover">
              <BsPlus/>
            <h3>ABDB MOVIE APP</h3>
            </div>
          </div>
        </Link>
        <Link to="/netflix">
          <div className="item">
            <img src="assets/Netflix.png" alt=""></img>
            <div className="hover">
              <BsPlus/>
            <h3>COMING SOON ...</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Works;
