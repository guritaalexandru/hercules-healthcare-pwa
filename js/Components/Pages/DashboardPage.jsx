import React, {useContext, Suspense} from 'react';
import GeneralLayout from "@/js/Components/Layout/GeneralLayout";
import { useTranslation } from 'next-i18next'

import {CollectionsContext} from "@/pages";

export default function DashboardPage(props){
	const collections = useContext(CollectionsContext);
	const { t } = useTranslation();
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={'DashboardPage'}>
				<div>
					<div className={'content-container'}>
						<h1 className={'text-5xl text-center mb-20 mt-10'}>
							{t('dashboardTitle')}
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


/*
export default function App() {
	return (
	  <Suspense fallback="loading">
		<DashboardPage />
	  </Suspense>
	);
  }
*/