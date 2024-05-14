import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import {CollectionContext,} from '@/pages/collections/[slug]';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent.jsx';
import SimpleTitleSection from '@/js/Components/Sections/SimpleTitleSection.jsx';

export default function CollectionPage(){
	const articles = useContext(CollectionContext);
	const { t, } = useTranslation();

	return (
		<GeneralLayout>
			<div id={ 'CollectionPage' }>
				<SimpleTitleSection title={ t('collectionPageTitle') } />
				<div className={ '' }>
					{articles.map((article, index) => {
						return (
							<StackedListItemComponent
								key={ index }
								title={ article.name }
								link={ `/article/${article.slug}` }
							/>
						);
					})}
				</div>
			</div>
		</GeneralLayout>
	);
}