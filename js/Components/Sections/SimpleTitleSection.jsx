import React from 'react';

export default function SimpleTitleSection({ title, }) {
	return (
		<div className={ 'content-container' }>
			<h1 className={ 'text-4xl text-center mt-10 mb-8' }>
				{title}
			</h1>
			<hr className="my-2 border-blue-300 w-1/3 mx-auto mb-8"/>
		</div>
	);
}
