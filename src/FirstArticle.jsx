import React from "react";

fetch('https://dummyjson.com/posts/1')
.then(response => response.json())
.then(json => {  const resultDiv = document.getElementById('result');
resultDiv.innerHTML = JSON.stringify(json)})

function FirstArticle(){
    return(
        <>
            <div className="articleWrap">
                <p className="articleParagraph" id="result"></p>
            </div>
        </>
    );
};

export {FirstArticle}; 