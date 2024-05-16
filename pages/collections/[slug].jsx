import React from 'react';

import CollectionPage from '@/js/Components/Pages/CollectionPage.jsx';
import {getAllCollections, getArticlesByCollectionSlug, getCollectionBySlug,} from '@/js/utils/database';
import { serverSideTranslations, } from 'next-i18next/serverSideTranslations.js';

export const CollectionContext = React.createContext({});

export default function Collection({articles, collectionName,}) {
	return (
		<CollectionContext.Provider
			value={{
				articles: articles,
				collectionName: collectionName,
			}}>
			<main className="page-container relative">
				<CollectionPage/>
			</main>
		</CollectionContext.Provider>
	);
}

export async function getStaticProps({params,  locale = 'en',}) {
	const collectionSlug = params.slug;
	const articles = getArticlesByCollectionSlug(collectionSlug);

	const collectionName = getCollectionBySlug(collectionSlug).name;

	return {
		props: {
			articles: articles,
			collectionName: collectionName,
			...(await serverSideTranslations(locale, [
				'common'
			])),
		},
	};
}

export function getStaticPaths() {
	const allCollections = getAllCollections();
	const paths = [];
	allCollections.forEach(collection => {
		paths.push({params: {slug: collection.slug,}, locale: 'en',});
		paths.push({params: {slug: collection.slug,}, locale: 'se',});
	});

	return {paths, fallback: false,};
}