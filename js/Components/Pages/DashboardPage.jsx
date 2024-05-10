import React, { useEffect, useState, } from 'react';
import GeneralLayout from '@/js/Components/Layout/GeneralLayout.jsx';
import { useTranslation, } from 'next-i18next';

import Link from 'next/link.js';
import Search from '@/js/Components/Search.jsx';

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
					<div className={ 'content-container' }>
						<h1 className={ 'text-4xl text-center mb-10 mt-10' }>
							{t('dashboardTitle')}
						</h1>
					</div>
					<Search />
					<div className={ 'content-container' }></div>
					<div
						className={ 'content-container' }
						style={{ marginTop: '40px', }}>
						<h2
							className={ 'text-3xl font-bold' }
							style={{ textAlign: 'center', }}>
							{t('history')}
						</h2>
						{history.length === 0 ? (
							<p
								className={ 'text-2xl' }
								style={{ textAlign: 'center', }}>{t('no history')}</p>
						) : (
							history.map((article, index) => {
								return (
									<div
										key={ index }
										className={ 'border border-gray-300 rounded p-4 mb-4' }>
										<Link href={ '/article/' + article.slug }>
											<h2 className={ 'text-3xl font-bold' }>
												{article.name}
											</h2>
										</Link>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
		</GeneralLayout>
	);
}
