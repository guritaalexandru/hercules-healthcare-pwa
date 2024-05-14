import React from 'react';
import {FaBookmark, FaRegBookmark,} from 'react-icons/fa';

export default function ArticleStickyBar ({ showToc, toggleToc, isBookmarked, toggleBookmark, }) {
	return (
		<div className="fixed top-12 w-full bg-white p-4 shadow-md flex justify-between items-center">
			<button
				onClick={ toggleToc }
				className="mr-4">
				{showToc ? 'Hide Table of Contents' : 'Show Table of Contents'}
			</button>
			<button onClick={ toggleBookmark }>
				{isBookmarked ? <FaBookmark className="text-gray-600 text-xl"/> : <FaRegBookmark className="text-gray-600 text-xl"/>}
			</button>
		</div>
	);
}