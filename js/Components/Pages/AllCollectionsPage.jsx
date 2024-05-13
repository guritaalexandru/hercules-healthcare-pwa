import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import { CollectionsContext, } from '@/pages/collections';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent';

export default function AllCollectionsPage(){
	const collections = useContext(CollectionsContext);
	const { t, } = useTranslation();
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={ 'AllCollectionsPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-4xl text-center mt-10 mb-8' }>
							{t('allCollectionsTitle')}
						</h1>
						<hr className="my-2 border-blue-300 w-1/3 mx-auto mb-8"/>
					</div>
					<div className={ '' }>
						{collections.map((collection, index) => {
							return (
								<StackedListItemComponent
									key={ index }
									title={ collection.name }
									link={ `/collections/${collection.slug}` }
									description={ collection.short_description }
								/>
							);
						})}
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
}