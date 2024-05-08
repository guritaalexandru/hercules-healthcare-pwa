import Link from 'next/link.js';
import React from 'react';
import { useTranslation, } from 'next-i18next';

export default function SideMenu() {
	const { t, } = useTranslation();

	return (
		<div
			id="SideMenu"
			style={{ width: '90%', }} >
			<div
				className={ 'content-container' }
				style={{marginTop: '80px', }}>
				<div
					style={{ backgroundColor: '#000830', width: '100%', }}
					className={ 'border border-gray-300 rounded p-4 mb-4' }>
					<Link href={ '../settings' } >
						<h2
							className={ 'text-3xl font-bold' }
							style={{ color: '#FFFFFF', }}>{t('settings')}</h2>
					</Link>
				</div>
				<div
					style={{ backgroundColor: '#000830', width: '100%', }}
					className={ 'border border-gray-300 rounded p-4 mb-4' }>
					<Link href={ '' }>
						<h2
							className={ 'text-3xl font-bold' }
							style={{ color: '#FFFFFF', }}>{t('others')}</h2>
					</Link>
				</div>
			</div>
		</div>
	);
}
