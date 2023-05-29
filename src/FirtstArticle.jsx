import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function FirstArticle() {
    const [article, setArticle] = useState();
    
    useEffect(() => {
        fetch('https://dummyjson.com/post')
          .then(res => res.json())
          .then(data => {
            const article = data.post.map(item => item.body)
            setArticle(article);
        });
      }, [])

  
    return (
        
        <div className="nav articlesList">
              <p>{article}</p>      
        </div>
    );
  }
export{FirstArticle}