import React, { useContext, useEffect, useState, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { ArticleContext, } from '@/pages/article/[slug]';
import { markdownToHtml, } from '@/js/utils/markdown.js';
import {
	addToLocalStorage,
	findInLocalStorage,
	LOCAL_STORAGE_KEYS,
	removeFromLocalStorage,
} from '@/js/utils/localStorage';
import SimpleTitleSection from '@/js/Components/Sections/SimpleTitleSection';
import ArticleStickyBar from '@/js/Components/Parts/ArticleStickyBar';
import {useTranslation,} from 'next-i18next';

export default function ArticlePage() {
	const article = useContext(ArticleContext);
	const { t, } = useTranslation();

	const [isArticleBookmarked, setIsArticleBookmarked] = useState(false);
	const [showTableOfContents, setShowTableOfContents] = useState(false);

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

	const toggleBookmark = () => {
		if (isArticleBookmarked) {
			removeFromLocalStorage(LOCAL_STORAGE_KEYS.BOOKMARKS, article.id);
			setIsArticleBookmarked(false);
		} else {
			addToLocalStorage(LOCAL_STORAGE_KEYS.BOOKMARKS, {
				id: article.id,
				slug: article.slug,
				name: article.name,
			});
			setIsArticleBookmarked(true);
		}
	};

	const toggleTableOfContents = () => {
		setShowTableOfContents(!showTableOfContents);
	};

	return (
		<GeneralLayout>
			<div
				id={ 'ArticlePage' }
				className={ 'relative pt-12' }>
				<ArticleStickyBar
					showToc={ showTableOfContents }
					toggleToc={ toggleTableOfContents }
					isBookmarked={ isArticleBookmarked }
					toggleBookmark={ toggleBookmark }
				/>
				<SimpleTitleSection title={ article.name } />
				<div className="content-container">
					{showTableOfContents && tableOfContents.length > 0 && (
						<div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
							<h2 className="mx-auto text-xl font-semibold">{t('tableOfContents')}</h2>
							<ul className="mt-2 list-disc px-2 pl-6">
								{tableOfContents.map((toc, index) => (
									<li
										key={ index }
										className="mb-2">
										<a
											href={ '#' + toc.id }
											className="block hover:bg-gray-200 px-2 py-1 rounded">
											{toc.text}
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
				<div className={ 'content-container markdown-content' }>
					<div dangerouslySetInnerHTML={{ __html: contentHtml, }} />
				</div>
			</div>
		</GeneralLayout>
	);
}
