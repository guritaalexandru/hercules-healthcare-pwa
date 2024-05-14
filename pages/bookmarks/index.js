import React from 'react';

import BookmarkPage from '@/js/Components/Pages/BookmarkPage.jsx';
import { serverSideTranslations, } from 'next-i18next/serverSideTranslations';

export default function Bookmarks() {
	return (
		<main className="page-container relative">
			<BookmarkPage/>
		</main>
	);
} 

export async function getStaticProps({ locale = 'en',}) {

	return {
		props: {
			...(await serverSideTranslations(locale, [
				'common'
			])),
		},
	};
}