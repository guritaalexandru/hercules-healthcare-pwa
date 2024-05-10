import React, {useContext, useEffect, useState,} from 'react';
import { useTranslation, } from 'next-i18next';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import {ArticleContext,} from '@/pages/article/[slug]';
import {markdownToHtml,} from '@/js/utils/markdown.js';
import {
	addToLocalStorage,
	findInLocalStorage,
	LOCAL_STORAGE_KEYS,
	removeFromLocalStorage,
} from '@/js/utils/localStorage';
import {FaBookmark, FaRegBookmark,} from 'react-icons/fa';

export default function ArticlePage(){
	const article = useContext(ArticleContext);
	const { t, } = useTranslation();

	const [isArticleBookmarked, setIsArticleBookmarked] = useState(false);

	const articleContentMarkdown = article.content;
	const { contentHtml, tableOfContents, } = markdownToHtml(articleContentMarkdown);

	const MAX_HISTORY_ITEMS = 4;
	
	useEffect(() => {
		const history = JSON.parse(localStorage.getItem('history')) || [];
		if (!history.some(item => item.slug === article.slug)) {
			history.push(article);
			// Keep only the last 4 history items
			if (history.length > MAX_HISTORY_ITEMS) {
				history.shift(); // Delete the first item
			}
			localStorage.setItem('history', JSON.stringify(history));
		}

		setIsArticleBookmarked(findInLocalStorage(LOCAL_STORAGE_KEYS.BOOKMARKS, article.id));
	}, []);

	return (
		<GeneralLayout>
			<div id={ 'ArticlePage' }>
				<div>
					<div className={ 'content-container' }>
						{
							isArticleBookmarked ?
								<button
									onClick={ () => {
										removeFromLocalStorage(LOCAL_STORAGE_KEYS.BOOKMARKS, article.id);
										setIsArticleBookmarked(false);
									} }>
									<FaBookmark className="text-gray-600 text-xl" />
								</button>
								:
								<button
									onClick={ () => {
										addToLocalStorage(LOCAL_STORAGE_KEYS.BOOKMARKS, {
											id: article.id,
											slug: article.slug,
											name: article.name,
										});
										setIsArticleBookmarked(true);
									} }>
									<FaRegBookmark className="text-gray-600 text-xl" />
								</button>
						}
					</div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-5xl text-center mb-20 mt-10' }>
							{t('articlePageTitle')}
						</h1>
					</div>
					<div className={ 'content-container' }>
						{
							tableOfContents.length > 0 &&
							<div className={ 'border border-gray-300 rounded p-4 mb-4' }>
								<h2 className={ 'text-3xl font-bold' }>
									Table of Contents
								</h2>
								<ul>
									{tableOfContents.map((toc, index) => {
										return (
											<li key={ index }>
												<a href={ '#' + toc.id }>
													{toc.text}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						}
						<div dangerouslySetInnerHTML={{ __html: contentHtml, }}/>
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
}

/*
export default function App() {
	return (
	  <Suspense fallback="loading">
		<ArticlePage />
	  </Suspense>
	);
  }
*/