import React, {useEffect, useState,} from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import Link from 'next/link';
import {getLocalStorage, LOCAL_STORAGE_KEYS,} from '@/js/utils/localStorage.js';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent';

export default function CollectionPage(props){
	const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
	const { t, } = useTranslation();

	useEffect(() => {
		const bookmarks = getLocalStorage(LOCAL_STORAGE_KEYS.BOOKMARKS);
		setBookmarkedArticles(bookmarks);
	}, []);

	return (
		<GeneralLayout>
			<div id={ 'CollectionPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-5xl text-center mb-20 mt-10' }>
							{t('bookmarksPageTitle')}
						</h1>
					</div>
					<div className={ 'content-container' }>
						{bookmarkedArticles.length === 0 ? (
							<p
								className={ 'text-2xl' }
								style={{ textAlign: 'center', }}>{t('noBookmarks')}</p>
						) : (
							bookmarkedArticles.map((article, index) => {
								return (
									<StackedListItemComponent
										key={ index }
										title={ article.name }
										link={ `/article/${article.slug}` }
									/>
								);
							})
						)}
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
}
