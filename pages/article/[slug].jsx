import React from 'react';

import {getAllArticles, getArticleBySlug,} from '@/js/utils/database';
import ArticlePage from '@/js/Components/Pages/ArticlePage';

export const ArticleContext = React.createContext({});

export default function Collection({article,}) {
	return (
		<ArticleContext.Provider value={ article }>
			<main className="page-container relative">
				<ArticlePage/>
			</main>
		</ArticleContext.Provider>
	);
}

export function getStaticProps({params,}) {
	const articleSlug = params.slug;
	const article = getArticleBySlug(articleSlug);

	return {
		props: {
			article: article,
		},
	};
}

export function getStaticPaths() {
	const allArticles = getAllArticles();
	const paths = [];
	allArticles.forEach(article => {
		paths.push({params: {slug: article.slug,}, locale: 'en',});
		paths.push({params: {slug: article.slug,}, locale: 'se',});
	});

	return {paths, fallback: false,};
}