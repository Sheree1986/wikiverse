import React from "react";
// import and prepend the api url to any fetch calls
import apiURL from '../api';



// Set the article data on state (a new piece of state)
export const Article = ({ articleData, setIsClicked }) => {




    return  (<div>
    
    
    <h1>{articleData.title}</h1>
    <p><strong>Author:</strong> {articleData.author.name}</p>
    <p><strong>Published:</strong> {articleData.createdAt}</p>
    <p><strong>Content:</strong> {articleData.content}</p>
    <p><strong>Tags:</strong></p>
    {articleData.tags.map((tag, idx) => {return <p key={idx}>{tag.name}</p>
    })}

    <button onClick={() => setIsClicked(null)}>Back to Wiki List</button>
  
    </div>
    )}