import React, { useContext, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import {CollectionContext,} from '@/pages/collections/[slug]';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent';

export default function CollectionPage(){
	const articles = useContext(CollectionContext);
	const { t, } = useTranslation();

	return (
		<GeneralLayout>
			<div id={ 'CollectionPage' }>
				<div>
					<div className={ 'content-container' }>
						<h1 className={ 'text-5xl text-center mb-20 mt-10' }>
							{t('collectionPageTitle')}
						</h1>
					</div>
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
			</div>
		</GeneralLayout>
	);
}