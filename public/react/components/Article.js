import React from "react";
// import and prepend the api url to any fetch calls
import apiURL from '../api';



// Set the article data on state (a new piece of state)
export const Article = ({ articleData, setArticleData, pages, setPages, isClicked, setIsClicked }) => {

    const day = new Date(articleData.createdAt).getUTCDate();
    const month = new Date(articleData.createdAt).getUTCMonth();
    const year = new Date(articleData.createdAt).getUTCFullYear();

const handleClick = async () => {
    const response = await fetch(`${apiURL}/wiki/${page.slug}`);
    
}


    return  (<>
    
    
    <h1>{articleData.title}</h1>
    <p><strong>Author:</strong> {articleData.author.name}</p>
    <p><strong>Published:</strong> {`${month + 1}/${day}/${year}`}</p>
    <p><strong>Content:</strong> {articleData.content}</p>
    <p><strong>Tags:</strong></p>
    {articleData.tags.map((tag, idx) => {return <p key={idx}>{tag.name}</p>
    })}

    <button onClick={() => setArticleData(null)}>Back to Wiki List</button>
  
    </>
    )}