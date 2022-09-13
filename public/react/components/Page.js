import React from 'react';

export const Page = ({page, displayAuthorData}) => {

  return <>
    <h3 onClick={() =>  displayAuthorData(page)}>{page.title}</h3>
  </>
} 
	