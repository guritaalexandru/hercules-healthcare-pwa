import React from 'react';
import Header from '@/js/Components/Layout/Header.jsx';
import BottomNavigation from '@/js/Components/Layout/BottomNavigation.jsx';

export default function GeneralLayout({ children, }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-1 overflow-y-auto mt-12 mb-12">{children}</div>
			<BottomNavigation />
		</div>
	);
}
