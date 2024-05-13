import React from 'react';
import Header from '@/js/Components/Layout/Header.jsx';
import BottomNavigation from '@/js/Components/Layout/BottomNavigation.jsx';

export default function GeneralLayout({ children, }) {
	return (
		<div className="h-screen fixed top-0 overflow-hidden flex flex-col">
			<Header />
			<div className="h-12"></div>
			<div className="flex-1 overflow-y-auto">
				{children}
			</div>
			<div className="h-12"></div>
			<BottomNavigation />
		</div>
	);
}

