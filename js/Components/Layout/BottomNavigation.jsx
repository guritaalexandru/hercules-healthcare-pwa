import React from 'react';
import { FaHome, FaFolder, FaBookmark, } from 'react-icons/fa';
import Link from 'next/link.js'; // Import icons from react-icons

export default function BottomNavigation() {
	return (
		<div
			id="BottomNavigation"
			className="fixed bottom-0 left-0 w-full bg-gray-200 h-12 flex justify-between"
		>
			<Link
				href={ '/' }
				className={ 'flex-1 flex items-center justify-center' }
			>
				<button
					type="button"
					aria-label="Dashboard">
					<FaHome className="text-gray-600 text-xl" />
				</button>
			</Link>
			<Link
				href={ '/collections' }
				className={ 'flex-1 flex items-center justify-center' }
			>
				<button
					type="button"
					aria-label="Collections">
					<FaFolder className="text-gray-600 text-xl" />
				</button>
			</Link>
			<Link
				href={ '/bookmarks' }
				className={ 'flex-1 flex items-center justify-center' }
			>
				<button
					type="button"
					aria-label="Bookmarks">
					<FaBookmark className="text-gray-600 text-xl" />
				</button>
			</Link>
		</div>
	);
}
