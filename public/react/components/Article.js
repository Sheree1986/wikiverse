import React, { useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from '../api';



// Set the article data on state (a new piece of state)
export const Article = ({ articleData, setIsClicked, fetchPages  }) => {


//     useEffect(() => {
//             deleteAuthorData()
      
   
// },[]);

// https://jasonwatmore.com/post/2020/11/11/react-fetch-http-delete-request-examples
    const deleteAuthorData = async () => {
 //https://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page
        window.location.reload(false);
    const response = await fetch(`${apiURL}/wiki/${articleData.slug}`, {
        method: "DELETE"});
        const data = await response.json();
      
    }

    
   



 


    return  (<div>
    
    
    <h1>{articleData.title}</h1>
    <p><strong>Author:</strong> {articleData.author.name}</p>
    <p><strong>Published:</strong> {articleData.createdAt}</p>
    <p><strong>Content:</strong> {articleData.content}</p>
    <p><strong>Tags:</strong></p>
    {articleData.tags.map((tag, idx) => {return <p key={idx}>{tag.name}</p>
    })}

    <button onClick={() => setIsClicked(null)}>Back to Wiki List</button>
    <button onClick={deleteAuthorData}>DELETE</button>
  
    </div>
    )}