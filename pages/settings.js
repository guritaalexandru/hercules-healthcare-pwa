import React from 'react';

import SettingsPage from '@/js/Components/Pages/SettingsPage.jsx';
import { serverSideTranslations, } from 'next-i18next/serverSideTranslations';

export const CollectionsContext = React.createContext({});

export default function Settings(collections) {
	return (
		<CollectionsContext.Provider value={ collections }>
			<main className="page-container relative">
				<SettingsPage />
			</main>
		</CollectionsContext.Provider>
	);
}

export async function getStaticProps({ locale, }) {
	return {
		props: { ...(await serverSideTranslations(locale, ['common'])), },
	};
}