import React from "react";
import {getAllArticles, getArticleById} from "@/js/utils/database";


const FlexSearch = require('flexsearch');

export default async function handler(req, res) {
  const { query } = req.query;

  const index = new FlexSearch.Index({
    tokenize: "reversed"
  });

  // Get all articles and add them to the index
  const articles = await getAllArticles();
  articles.forEach(article => index.add(article.id, article.name));

  // Use the FlexSearch index to perform a search
  const resultId = index.search(query);

  const results = resultId.map(id => {
    const article = articles.find(article => article.id === id);
    return article ? article.name : null;
  });

  // Return the search results
  //console.log(json(results));

  //ask db for corresp articles from IDs
  // URI = articles/[id]
  // output json({ name: article.name, ID: article.id })


  let newResults = {
    id: new Array(),
    name: new Array(),
  };
  for(let i=0; i < results.length; i++){
    newResults.id[i] = results[i];
    newResults.name[i] = getArticleById(results[i]).name;
    //newResults.URI = 
  }

  //console.log(newResults);

  res.status(200).json( newResults.name );
  res.status(200).json(results);
  //res.status(200).toString(results);
}