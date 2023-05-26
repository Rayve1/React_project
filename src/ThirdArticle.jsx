import React from "react";


fetch('https://dummyjson.com/posts/3')
.then(response => response.json())
.then(json => {  const resultDiv = document.getElementById('result');
resultDiv.innerHTML = JSON.stringify(json)})

function ThirdArticle(){
    return(
        <div className="articleWrap nav">
            <p className="articleParagraph" id="result"> Содержание статьи 3</p>
        </div>
    );
};
export {ThirdArticle}; 