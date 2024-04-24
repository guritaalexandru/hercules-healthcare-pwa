import React, {useContext} from 'react';
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";

import {CollectionsContext} from "@/pages";

export default function DashboardPage(props){
	const collections = useContext(CollectionsContext);
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={'DashboardPage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							Dashboard
						</h1>
					</div>
					<div className={'content-container'}>
					</div>
					<div className={'content-container'}>
					</div>
				</div>
			</div>
		</GeneralLayout>
	)
}