import React from "react";
import {getAllArticles, getArticleById} from "@/js/utils/database";


const FlexSearch = require('flexsearch');

export default async function handler(req, res) {
  const { query } = req.query;

  const index = new FlexSearch('speed');

  // Get all articles and add them to the index
  const articles = await getAllArticles();
  articles.forEach(article => index.add(article.id, article.title));

  // Use the FlexSearch index to perform a search
  const results = index.search(query);

  // Return the search results
  res.status(200).json(results);
}