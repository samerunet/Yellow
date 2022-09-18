import React from "react";

import Feed from "../components/feed/Feed.js";
import Left from "../components/sidebarLeft/SidebarLeft.js";
import Right from "../components/sidebarRight/SidebarRight.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Main({
	setPost,
	setComment,
	setUsers,
	users,
	post,
	user,
}) {
	const [modeFunction, setModeFunction] = useState(true);

	const API = "https://secure-forest-62515.herokuapp.com/api";

	// FETCH - USERS
	const getUsers = () => {
		axios.get(`${API}/users`).then((response) =>
			// console.log(response.data),
			setUsers(response.data)
		);
	};
	// FETCH - POSTS
	const getPosts = () => {
		axios.get(`${API}/post`).then((response) => setPost(response.data));
	};
	// FETCH - COMMENTS
	const getComments = () => {
		axios.get(`${API}/comments`).then((response) => setComment(response.data));
	};

	useEffect(() => {
		getUsers();
		getPosts();
		getComments();
	}, []);

	const modeToggle = () => {
		modeFunction ? setModeFunction(false) : setModeFunction(true);
	};

	return (
		<div className={` ${modeFunction ? "bg-main" : "bg-dark-main"}`}>
			<div class="flex h-screen bg-[url('')] ">
				<div class='flex-1 flex flex-col overflow-hidden'>
					<header class='nav'></header>
					<div class='flex h-full'>
						<nav class='flex w-72 h-full '>
							<div class='w-full flex mx-auto px-6 py-8'>
								<Left users={users} />
							</div>
						</nav>
						<main class=''>
							<Feed post={post} user={user} />
						</main>
						<nav class='flex w-72 h-full '>
							<div class='w-full flex mx-auto px-6 py-8'>
								<div class='w-full h-full flex items-center justify-center text-gray-900 text-xl '>
									<Right user={user} />
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}
