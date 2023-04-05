import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import ComicCard from "./components/ComicCard/ComicCard";
import Favorites from "./routes/Favorites";
import Home from "./routes/Home";
import HeroImage from "./components/HeroImage/HeroImage";

export default function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <HeroImage />
        <Routes>
          <Route path={"favorites"} element={<Favorites/>}/>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}
