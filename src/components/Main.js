import React from "react";
import Nav from "../components/navbar/Navbar.js";
import Feed from "../components/feed/Feed.js";
import Left from "../components/sidebarLeft/SidebarLeft.js";
import Right from "../components/sidebarRight/SidebarRight.js";
import { useState, useEffect } from "react";

export default function Main() {
	const [modeFunction, setModeFunction] = useState(true);

	const modeToggle = (post) => {
		modeFunction ? setModeFunction(false) : setModeFunction(true);
	};
	return (
		<div className={` ${modeFunction ? "bg-main" : "bg-dark-main"}`}>
			<div class="flex h-screen bg-[url('')] ">
				<div class='flex-1 flex flex-col overflow-hidden'>
					<header class='nav'>
						<Nav modeToggle={modeToggle} />
					</header>
					<div class='flex h-full'>
						<nav class='flex w-72 h-full '>
							<div class='w-full flex mx-auto px-6 py-8'>
								<Left />
							</div>
						</nav>
						<main class='flex flex-col w-full bg-white overflow-x-hidden overflow-y-hidden mb-14 rounded-xl'>
							<Feed />
						</main>
						<nav class='flex w-72 h-full '>
							<div class='w-full flex mx-auto px-6 py-8'>
								<div class='w-full h-full flex items-center justify-center text-gray-900 text-xl '>
									<Right />
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}
