import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/about";
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact";

import Layouts from "./components/Layouts";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route element={<Layouts/>}>
    <Route path="/" element={<Hero/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="contact" element={<Contact/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    
    </>
  );
}

export default App;
