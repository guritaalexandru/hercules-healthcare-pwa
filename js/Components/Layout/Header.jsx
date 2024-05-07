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
				className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center h-[56px]">
				<div className="text-xl font-bold">Healthcare in Your Hands</div>
				<button
					type="button"
					className="focus:outline-none"
					onClick={ toggleSideMenu }>
					<FaBars className="text-xl"/>
				</button>
			</div>
			<div className={ `side-menu ${isSideMenuOpen ? 'open' : ''}` }>
				<SideMenu/>
			</div>
		</>
	);
}
