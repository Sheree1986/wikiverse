import React, {useState}from "react";
import apiURL from "../api";

// set field states 
export const Form = ({setIsAddingArticle }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [tags, setTags] = useState();


// event handling for post method 
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        const response = await fetch(`${apiURL}/wiki`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
           // can use JSON.parse to return to object
           // date is create via the post 
            
                title,
                content,
                name,
                email,
                tags,
            })
          });
          const data = await response.json();
          if (data.code === 200) {
            setIsAddingArticle(false);
            return;
          } else {
            throw new Error("Post not saved");
        }  
    };
        return (
            <>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Author Name"
                />
                <input onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Article Title"
                />
                <input
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="Content"
                />
                <input onChange={(event) => setTags(event.target.value)} placeholder="Tag" />
                <button type="submit">Create Post</button>
                <button onClick={() => setIsAddingArticle(false)}>Back to Wiki List!</button>
              </form>         

            </>
        )
        };