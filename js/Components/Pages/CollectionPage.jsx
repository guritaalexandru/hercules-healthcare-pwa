import React, {useContext} from 'react';
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";

import {CollectionContext} from "@/pages/collections/[id]";
import Link from "next/link";

export default function CollectionPage(props){
	const articles = useContext(CollectionContext);
	console.log(articles);

	return (
		<GeneralLayout>
			<div id={'CollectionPage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							Collection name
						</h1>
					</div>
					<div className={'content-container'}>
						{articles.map((article, index) => {
							return (
								<div key={index} className={'border border-gray-300 rounded p-4 mb-4'}>
									<Link href={'/article/' + article.id}>
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