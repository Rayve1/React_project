import React from "react";

fetch('https://dummyjson.com/posts/2')
.then(response => response.json())
.then(json => {  const resultDiv = document.getElementById('result');
resultDiv.innerHTML = JSON.stringify(json)})

function SecondArticle(){
    return(
        <div className="articleWrap nav">
            <p className="articleParagraph" id="result"> Содержание статьи 2</p>
        </div>
    );
};
export {SecondArticle}; 