import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';
import { Form } from './Form';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	const [isClicked, setIsClicked] = useState(false);

	// Set the article data on state (a new piece of state)
	const [articleData, setArticleData] = useState();

	//set a boolean to true on state 
	const [isAddingArticle, setIsAddingArticle] = useState(false)

	

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}



	useEffect(() => {
		fetchPages();
	}, []);

const displayAuthorData = async (page) => {
		const response = await fetch(`${apiURL}/wiki/${page.slug}`);
		const data = await response.json();
		setArticleData(data);
	}
	return (
		<main>	
      		<h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{!isClicked ? (
				<PagesList pages={pages} setArticleData={setArticleData} setIsClicked={setIsClicked} />
			) :( 
				<Article articleData={articleData}  setIsClicked={setIsClicked} />
			)} 
			{!isAddingArticle ? (
				<button onClick={() => setIsAddingArticle(true)}>Create Page</button>
			) : (

					<Form  setIsAddingArticle={setIsAddingArticle} />
			)}
{/* 
			 {!articleData ? (
			<PagesList pages={pages}  displayAuthorData={displayAuthorData} setIsClicked={setIsClicked} />
			) : (
			<Article articleData={articleData}  setArticleData={setArticleData} pages={pages} setPages={setPages}  isClicked={isClicked} setIsClicked={setIsClicked} />
			)} {!isAddingArticle ? (
				<button onClick={() => setIsAddingArticle(true)}>Create Page</button>
			) : (
				<div>
					<Form isAddingArticle={isAddingArticle} setIsAddingArticle={setIsAddingArticle} />
				</div>
			)}  */}

		

		</main>
	)
}