import React, {useContext} from 'react';
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";

import {CollectionsContext} from "@/pages/collections";
import Link from "next/link";

export default function AllCollectionsPage(props){
	const collections = useContext(CollectionsContext);
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={'AllCollectionsPage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							Collections
						</h1>
					</div>
					<div className={'content-container'}>
						{collections.map((collection, index) => {
							return (
								<div key={index} className={'border border-gray-300 rounded p-4 mb-4'}>
									<Link href={'/collections/' + collection.id}>
										<h2 className={'text-3xl font-bold'}>
											{collection.name}
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