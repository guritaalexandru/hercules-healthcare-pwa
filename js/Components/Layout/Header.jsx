import React from "react";
import { FaBars } from "react-icons/fa"; // Import burger menu icon from react-icons

export default function Header() {
	return (
		<div id="Header" className="bg-gray-800 text-white p-4 flex justify-between items-center">
			<div className="text-xl font-bold">Your Application Name</div>
			<button className="focus:outline-none">
				<FaBars className="text-xl" />
			</button>
		</div>
	);
}
