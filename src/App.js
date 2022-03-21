import { Routes, Route } from "react-router-dom";
import AboutPage from "./screens/AboutPage"
import HomePage from "./screens/HomePage";
import Zamazingo from "./screens/ZamazingoPage";
import BlogNode from "./screens/BlogNodePage";
import ABDBMovie from "./screens/ABDBMoviePage";
import WeatherApp from "./screens/WeatherApp";
import CurrencyConverter from "./screens/CurrencyConverterPage";
import WorksPage from "./screens/WorksPage"
import NetflixClone from "./screens/NetflixClone";
import "./app.scss"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/zamazingo" element={<Zamazingo />}/>
        <Route path="/blognode" element={<BlogNode />}/>
        <Route path="/abdbmovie" element={<ABDBMovie />}/>
        <Route path="/weather" element={<WeatherApp />}/>
        <Route path="/currency" element={<CurrencyConverter />}/>
        <Route path="/works" element={<WorksPage/>}/>
        <Route path="/netflix" element={<NetflixClone/>}/>
      </Routes>
    </>

  );
}

export default App;
