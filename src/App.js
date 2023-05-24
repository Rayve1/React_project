import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {style} from "./style.css"
import { Articles } from "./Articles";


function App() {
  return (
    <>      

      <div className="logo">
        <p className="logo-text">LOGO</p>
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
              
            <Routes>
                <Route path="/Articles" element={<Articles/>}/>
            </Routes>
            

    </>
  );
}

export default App;