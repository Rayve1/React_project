import React , {useState, useEffect} from "react";
import {Route, Routes, Link} from "react-router-dom";
import {FirstArticle} from "./FirtstArticle"

function Articles(){
  const [titles, setTitles] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/post')
      .then(res => res.json())
      .then(data => {
        const titles = data.posts.map(item => item.title);
        setTitles(titles);   
      });
  }, [])

  return(
    <div className="nav articlesList">
      {
        titles.map((title, index) => (
          <span className="linkWrap" key={index}>
            <a href={"/FirstArticle"}>{title}</a>
          </span>
        ))
      }
      <Routes>
        <Route path="/FirstArticle" element={<FirstArticle/>} />
      </Routes>
    </div>
  );
} 
export {Articles}; 