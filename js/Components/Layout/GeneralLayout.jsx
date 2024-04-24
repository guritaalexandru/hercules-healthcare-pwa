import React from "react";
import Header from "@/js/Components/Layout/Header";
import BottomNavigation from "@/js/Components/Layout/BottomNavigation";

export default function GeneralLayout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-1 overflow-y-auto">{children}</div>
			<BottomNavigation />
		</div>
	);
}
