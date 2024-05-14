import React from 'react';
import Link from 'next/link';
import { MdArrowForward, } from 'react-icons/md';

export default function StackedListItemComponent({ title, description, link, }) {
	return (
		<Link
			href={ link }
			className="block w-full p-6 bg-white border-t border-blue-300 hover:bg-blue-100 shadow-blue-400 shadow-sm">
			<div className="flex items-center justify-between">
				<h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
				<MdArrowForward className="text-blue-700 w-6 h-6" />
			</div>
			<hr className="my-2 border-blue-300" />
			{description && (
				<p className="font-normal">{description}</p>
			)}
		</Link>
	);
}
