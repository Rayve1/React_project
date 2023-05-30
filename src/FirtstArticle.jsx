import React,{useState, useEffect} from "react";
import Articels from "./Articles"
import { useParams } from "react-router-dom";

function FirstArticle(props) {
    const [article, setArticle] = useState();
    const [articleTitle, setArticleTitle] = useState();
    let {id} = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
          .then(res => res.json())
          .then(data => {
            setArticle(data.body);
            setArticleTitle(data.title)}
            );
          
      },[])

  
    return (
      <div className="nav articlesList">
      {
          <span className="linkWrap">
            <h1 className="articleH1">{articleTitle}</h1>
             <p className="articleParagraph">{article}</p>
          </span>
      }
      </div>
    );
  }
export{FirstArticle}