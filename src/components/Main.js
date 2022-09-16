import React from "react";
import Nav from "../components/navbar/Navbar.js";
import Feed from "../components/feed/Feed.js";
import Left from "../components/sidebarLeft/SidebarLeft.js";
import Right from "../components/sidebarRight/SidebarRight.js";

export default function Main() {
	return (
		<>
			<div class="flex h-screen bg-[url('')] ">
				<div class='flex-1 flex flex-col overflow-hidden'>
					<header class='nav'>
						<Nav />
					</header>
					<div class='flex h-full'>
						<nav class='flex w-72 h-full '>
							<div class='w-full flex mx-auto px-6 py-8'>
								<Left />
							</div>
						</nav>
						<main class='flex flex-col w-full bg-white overflow-x-hidden overflow-y-hidden mb-14'>
							<div class='flex w-full mx-auto px-6 py-8'>
								<div class='flex flex-col w-full h-full text-gray-900 text-xl '>
									<Feed />
								</div>
							</div>
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
		</>
	);
}
