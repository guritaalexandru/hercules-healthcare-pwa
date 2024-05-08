import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';
import { useRouter, } from 'next/router.js';

import {CollectionContext,} from '@/pages/collections/[slug]';
import Link from 'next/link.js';

export default function CollectionPage(){
	const articles = useContext(CollectionContext);
	const { t, } = useTranslation();
	const router = useRouter();
	const handleArticleClick = article => {
		// Save the article to the browsing history
		const history = JSON.parse(localStorage.getItem('history')) || [];
		if (!history.some(item => item.slug === article.slug)) {
			// If the article is not in the browsing history, add it
			history.push(article);
			localStorage.setItem('history', JSON.stringify(history));
		}

		// Navigate to the article page
		router.push('/article/' + article.slug);
	};
	console.log(articles);

	return (
		<GeneralLayout>
			<div id={ 'CollectionPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-5xl text-center mb-20 mt-10' }>
							{t('collectionPageTitle')}
						</h1>
					</div>
					<div className={ 'content-container' }>
						{articles.map((article, index) => {
							return (
								<div
									key={ index }
									className={ 'border border-gray-300 rounded p-4 mb-4' }
									onClick={ () => handleArticleClick(article) }>
									<Link href={ '/article/' + article.slug }>
										<h2 className={ 'text-3xl font-bold' }>
											{article.name}
										</h2>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
}