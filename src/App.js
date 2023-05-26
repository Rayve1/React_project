import React, { Component, useEffect } from "react";
import {Routes, Route, Link, json} from "react-router-dom";
import {style} from "./style.css"
import { Articles } from "./Articles";
import { FirstArticle } from "./FirstArticle";
import { SecondArticle } from "./SecondArticel"
import { ThirdArticle } from "./ThirdArticle"


function App() {

  return (
    
    <>      
      <div className="logo">
        <p className="logo-text">Logo</p>
      </div>
      <div className="nav">
            <span className="linkWrap">
              <Link to="/Articles">Статьи</Link>
            </span>
            <span className="linkWrap">
              <a href="/#">Тесты </a>
            </span>
            <span className="linkWrap">
              <a href="/#">Игры </a>
            </span>
      </div>

      <div className="banner">
        <p className="banner-text">BANNER</p>
      </div>
      
            <Routes>
                <Route path="/Articles" element={<Articles/>}/>
            </Routes>
            <Routes>
              <Route path="/FirstArticle" element={<FirstArticle/>} />
              <Route path="/SecondArticle" element={<SecondArticle/>} />
              <Route path="/ThirdArticle" element={<ThirdArticle/>} />
            </Routes>
            
    </>
  );
}
  
export default App;