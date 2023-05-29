import React, { useEffect ,useState } from "react";


function FirstArticle(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
    fetch('https://dummyjson.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, []);
    return(
        <>
            <div className="articleWrap">
                <h1 className="articleH1">{title}</h1>
                <p className="articleParagraph" id="result">{body}</p>
            </div>
        </>
    );
};

export {FirstArticle}; 