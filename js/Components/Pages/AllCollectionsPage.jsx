import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import { CollectionsContext, } from '@/pages/collections';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent.jsx';
import SimpleTitleSection from '@/js/Components/Sections/SimpleTitleSection.jsx';

export default function AllCollectionsPage(){
	const collections = useContext(CollectionsContext);
	const { t, } = useTranslation();
	console.log(collections);

	return (
		<GeneralLayout>
			<div id={ 'AllCollectionsPage' }>
				<div>
					<SimpleTitleSection title={ t('allCollectionsTitle') } />
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