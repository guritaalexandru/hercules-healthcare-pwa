import React from 'react';
import Header from '@/js/Components/Layout/Header.jsx';
import BottomNavigation from '@/js/Components/Layout/BottomNavigation.jsx';

export default function GeneralLayout({ children, }) {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<div className="h-12"></div>
			<div className="flex-1 overflow-y-auto pb-20">
				{children}
			</div>
			<div className="h-12"></div>
			<BottomNavigation />
		</div>
	);
}

