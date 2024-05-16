import Link from 'next/link.js';
import React from 'react';
import { useTranslation, } from 'next-i18next';
import {MdArrowForward,} from 'react-icons/md';
import SimpleTitleSection from '@/js/Components/Sections/SimpleTitleSection';

export default function SideMenu() {
	const { t, } = useTranslation();

	return (
		<div
			id="SideMenu"
			className="w-full bg-white">
			<SimpleTitleSection title={ 'More pages' } />
			<div className="space-y-4">
				<div className="bg-white">
					<Link
						href={ '/settings' }
						className="block w-full p-6 bg-white border-t border-blue-300 hover:bg-blue-100 shadow-blue-400 shadow-sm">
						<div className="flex items-center justify-between">
							<h5 className="text-2xl font-bold tracking-tight">{t('settings')}</h5>
							<MdArrowForward className="text-blue-700 w-6 h-6" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
