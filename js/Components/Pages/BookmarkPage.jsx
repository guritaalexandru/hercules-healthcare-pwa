import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import { CollectionsContext, } from '@/pages';

export default function BookmarkPage() {
	const collections = useContext(CollectionsContext);
	const { t, } = useTranslation();
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={ 'BookmarkPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-4xl text-center mb-10 mt-10' }>
							{t('bookmarkPageTitle')}
						</h1>
					</div>
					<div className={ 'content-container' }></div>
				</div>
			</div>
		</GeneralLayout>
	);
}
