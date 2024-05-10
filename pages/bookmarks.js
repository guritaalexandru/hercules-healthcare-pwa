import React from 'react';

import { getAllCollections, } from '@/js/utils/database.js';
import BookmarkPage from '@/js/Components/Pages/BookmarkPage.jsx';

export const CollectionsContext = React.createContext({});

export default function Bookmarks({ collections, }) {
	return (
		<CollectionsContext.Provider value={ collections }>
			<main className="page-container relative">
				<BookmarkPage />
			</main>
		</CollectionsContext.Provider>
	);
}

export function getStaticProps() {
	return {
		props: {
			collections: getAllCollections(),
		},
	};
}