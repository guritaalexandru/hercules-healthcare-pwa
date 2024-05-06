import React, { useContext, Suspense } from "react";
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import { useTranslation } from 'next-i18next'

import {BookmarksContext} from "@/pages/bookmarks";
import Link from "next/link";

export default function CollectionPage(props){
	const bookmarks = useContext(BookmarksContext);
	const { t } = useTranslation();
	console.log(bookmarks);

	return (
		<GeneralLayout>
			<div id={'CollectionPage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							{t('bookmarksPageTitle')}
						</h1>
					</div>
					<div className={"content-container"}>
          {bookmarks.map((article, index) => {
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
