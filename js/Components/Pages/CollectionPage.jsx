import React, {useContext, Suspense} from 'react';
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import { useTranslation } from 'react-i18next';

import {CollectionContext} from "@/pages/collections/[slug]";
import Link from "next/link";

function CollectionPage(props){
	const articles = useContext(CollectionContext);
	const { t, i18n } = useTranslation();
	console.log(articles);

	return (
		<GeneralLayout>
			<div id={'CollectionPage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							{t('collectionPageTitle')}
						</h1>
					</div>
					<div className={'content-container'}>
						{articles.map((article, index) => {
							return (
								<div key={index} className={'border border-gray-300 rounded p-4 mb-4'}>
									<Link href={'/article/' + article.slug}>
										<h2 className={'text-3xl font-bold'}>
											{article.name}
										</h2>
									</Link>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</GeneralLayout>
	)
}

export default function App() {
	return (
	  <Suspense fallback="loading">
		<CollectionPage />
	  </Suspense>
	);
  }