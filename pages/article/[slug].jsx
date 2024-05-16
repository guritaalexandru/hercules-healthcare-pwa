import React from 'react';

import {getAllArticles, getArticleBySlug,} from '@/js/utils/database';
import ArticlePage from '@/js/Components/Pages/ArticlePage';
import {serverSideTranslations,} from 'next-i18next/serverSideTranslations';

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

export async function getStaticProps({params,  locale = 'en',}) {
	const articleSlug = params.slug;
	const article = getArticleBySlug(articleSlug);

	return {
		props: {
			article: article,
			...(await serverSideTranslations(locale, [
				'common'
			])),
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