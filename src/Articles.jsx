import React from "react";
import {Route, Routes} from "react-router-dom";
import { FirstArticle } from "./FirstArticle";
import { SecondArticle } from "./SecondArticel"
import { ThirdArticle } from "./ThirdArticle"

function Articles(){
    return(

     
        <div className="nav articlesList">
        <span className="linkWrap"><a href="/FirstArticle">Статья 1</a></span>
        <span className="linkWrap"><a href="/SecondArticle">Статья 2</a></span>
        <span className="linkWrap"><a href="/ThirdArticle">Статья 3</a></span>

        <Routes>
              <Route path="/FirstArticle" element={<FirstArticle/>} />
              <Route path="/SecondArticle" element={<SecondArticle/>} />
              <Route path="/ThirdArticle" element={<ThirdArticle/>} />
        </Routes>
      </div>
    );
};
export {Articles}; 