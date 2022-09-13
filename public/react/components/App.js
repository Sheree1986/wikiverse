import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	const [isClicked, setIsClicked] = useState(false);

	// Set the article data on state (a new piece of state)
	const [articleData, setArticleData] = useState();

	

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
			{!articleData ? (
			<PagesList pages={pages}  displayAuthorData={displayAuthorData} setIsClicked={setIsClicked} />
			) : (
			<Article articleData={articleData}  setArticleData={setArticleData} pages={pages} setPages={setPages}  isClicked={isClicked} setIsClicked={setIsClicked} />
			)}
			
		</main>
	)
}