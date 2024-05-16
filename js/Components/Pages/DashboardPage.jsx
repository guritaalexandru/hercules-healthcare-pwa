import React, { useEffect, useState, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import Link from 'next/link.js';
import Search from '@/js/Components/Search.jsx';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent';
import SimpleTitleSection from '@/js/Components/Sections/SimpleTitleSection';

export default function DashboardPage(){
	const { t, } = useTranslation();
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const localHistory = JSON.parse(localStorage.getItem('history')) || [];
		setHistory(localHistory);
	}, []);

	return (
		<GeneralLayout>
			<div id={ 'DashboardPage' }>
				<div>
					<SimpleTitleSection title={ t('dashboardTitle') } />
					<Search />
					<div className={ 'content-container' }></div>
					<div
						className={ '' }
						style={{ marginTop: '40px', }}>
						<h2
							className={ 'text-3xl font-bold' }
							style={{ textAlign: 'center', }}>
							{t('history')}
						</h2>
						{history.length === 0 ? (
							<p
								className={ 'text-2xl' }
								style={{ textAlign: 'center', }}>{t('noHistory')}</p>
						) : (
							history.map((article, index) => {
								return (
									<StackedListItemComponent
										key={ index }
										title={ article.name }
										link={ `/article/${article.slug}` }
									/>
								);
							})
						)}
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
}
