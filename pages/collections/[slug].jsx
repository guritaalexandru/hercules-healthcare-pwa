import React from 'react';

import CollectionPage from '@/js/Components/Pages/CollectionPage';
import {getAllCollections, getArticlesByCollectionSlug,} from '@/js/utils/database';
import {serverSideTranslations,} from 'next-i18next/serverSideTranslations';

export const CollectionContext = React.createContext({});

export default function Collection({articles,}) {
	return (
		<CollectionContext.Provider value={ articles }>
			<main className="page-container relative">
				<CollectionPage/>
			</main>
		</CollectionContext.Provider>
	);
}

export async function getStaticProps({params,  locale = 'en',}) {
	const collectionSlug = params.slug;
	const articles = getArticlesByCollectionSlug(collectionSlug);

	return {
		props: {
			articles: articles,
			...(await serverSideTranslations(locale, [
				'common'
			])),
		},
	};
}

export function getStaticPaths() {
	const paths = getAllCollections().map(collection => ({
		params: {slug: collection.slug,},
	}));

	return {paths, fallback: false,};
}