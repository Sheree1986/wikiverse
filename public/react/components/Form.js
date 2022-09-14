import React, {useState}from "react";
import apiURL from "../api";

// set field states 
export const Form = ({setIsAddingArticle }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");


// event handling for post method 
    const handleSubmit = async (event) => {
        event.preventDefault();
       
        const response = await fetch(`${apiURL}/wiki`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
           // can use JSON.parse to return to object
           // date is create via the post 
            
                title :  title, 
                content : content,
                name : name,
                email : email,
                tags : tags,
            })
          });
          const data = await response.json();

          //no error handling needed for it to work
        //   if (data.code === 200) {
        //     setIsAddingArticle(false);
        //     return;
        //   } else {
        //     throw new Error("Post not saved");
        // }  
        // like the myth creature you must reset state
        setName("");
        setEmail("");
        setTitle("");
        setContent("");
        setTags("");
    };
        return (
            <>
              <form onSubmit={handleSubmit}>
                <input value={name} type="text"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Author Name"
                />
                <input value={email} type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                
                <input  type="text" value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Article Title"
                />
                <input value={content} type="text"
                  onChange={(event) => setContent(event.target.value)}
                  placeholder="Content"
                />
                <input value={tags} type="text" onChange={(event) => setTags(event.target.value)} placeholder="Tag" />
                <button type="submit">Create Post</button>
                <button onClick={() => setIsAddingArticle(false)}>Back to Wiki List!</button>
              </form>         

            </>
        )
        };