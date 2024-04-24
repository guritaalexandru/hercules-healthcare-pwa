import React, {useContext} from 'react';

import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import {ArticleContext} from "@/pages/article/[id]";
import {markdownToHtml} from "@/js/utils/markdown";

export default function ArticlePage(props){
	const article = useContext(ArticleContext);
	const articleContentMarkdown = article.content;

	const {contentHtml, tableOfContents} = markdownToHtml(articleContentMarkdown);

	return (
		<GeneralLayout>
			<div id={'ArticlePage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							Article name
						</h1>
					</div>
					<div className={'content-container'}>
						{
							tableOfContents.length > 0 &&
							<div className={'border border-gray-300 rounded p-4 mb-4'}>
								<h2 className={'text-3xl font-bold'}>
									Table of Contents
								</h2>
								<ul>
									{tableOfContents.map((toc, index) => {
										return (
											<li key={index}>
												<a href={'#' + toc.id}>
													{toc.text}
												</a>
											</li>
										)
									})}
								</ul>
							</div>
						}
						<div className={'pb-40'}></div>
						<div className={'pb-40'}></div>
						<div className={'pb-40'}></div>
						<div className={'pb-40'}></div>
						<div className={'pb-40'}></div>
						<div className={'pb-40'}></div>

						<div dangerouslySetInnerHTML={{__html: contentHtml}}/>
					</div>
				</div>
			</div>
		</GeneralLayout>
	)
}
