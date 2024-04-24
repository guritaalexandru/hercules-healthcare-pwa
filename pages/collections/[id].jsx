import React from "react";

import CollectionPage from "@/js/Components/Pages/CollectionPage";
import {getAllCollections, getArticlesByCollection} from "@/js/utils/database";

export const CollectionContext = React.createContext({});

export default function Collection({articles}) {
	return (
		<CollectionContext.Provider value={articles}>
			<main className="page-container relative">
				<CollectionPage/>
			</main>
		</CollectionContext.Provider>
	);
}

export function getStaticProps({params,}) {
	const collectionId = params.id;
	const articles = getArticlesByCollection(collectionId);

	return {
		props: {
			articles: articles,
		},
	};
}

/// TODO: Get collections by slug
export async function getStaticPaths() {
	const paths = getAllCollections().map((collection) => ({
		params: {id: collection.id.toString()},
	}));

	return {paths, fallback: false};
}