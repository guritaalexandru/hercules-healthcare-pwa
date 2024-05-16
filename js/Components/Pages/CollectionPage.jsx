import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';

import {CollectionContext,} from '@/pages/collections/[slug]';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent';
import SimpleTitleSection from '@/js/Components/Sections/SimpleTitleSection';

export default function CollectionPage(){
	const {articles, collectionName,} = useContext(CollectionContext);

	return (
		<GeneralLayout>
			<div id={ 'CollectionPage' }>
				<SimpleTitleSection title={ collectionName } />
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