import React, { useState, } from 'react';
import { FaBars, } from 'react-icons/fa';
import SideMenu from '@/js/Components/Layout/SideMenu.jsx'; // Import burger menu icon from react-icons

export default function Header() {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const toggleSideMenu = () => {
		setIsSideMenuOpen(!isSideMenuOpen);
	};

	return (
		<>
			<div
				id="Header"
				className="fixed top-0 left-0 w-full bg-gray-800 text-white px-4 flex justify-between items-center h-12 z-50">
				<div className="text-l font-bold">Healthcare in Your Hands</div>
				<button
					type="button"
					className="focus:outline-none"
					onClick={ toggleSideMenu }>
					<FaBars className="text-l"/>
				</button>
			</div>
			<div className={ `side-menu ${isSideMenuOpen ? 'open' : ''}` }>
				<SideMenu/>
			</div>
		</>
	);
}
