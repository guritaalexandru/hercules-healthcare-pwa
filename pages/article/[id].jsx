import React from "react";

import {getAllArticles, getArticleById} from "@/js/utils/database";
import ArticlePage from "@/js/Components/Pages/ArticlePage";
import {markdownToHtml} from "@/js/utils/markdown";

export const ArticleContext = React.createContext({});

export default function Collection({article}) {
	return (
		<ArticleContext.Provider value={article}>
			<main className="page-container relative">
				<ArticlePage/>
			</main>
		</ArticleContext.Provider>
	);
}

export async function getStaticProps({params,}) {
	const articleId = params.id;
	const article = getArticleById(articleId);

	return {
		props: {
			article: article,
		},
	};
}

/// TODO: Get articles by slug
export async function getStaticPaths() {
	const paths = getAllArticles().map((article) => ({
		params: {id: article.id.toString()},
	}));

	return {paths, fallback: false};
}