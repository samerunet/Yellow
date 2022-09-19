import React from "react";
import Feed from "../components/feed/Feed.js";
import Left from "../components/sidebarLeft/SidebarLeft.js";
import Right from "../components/sidebarRight/SidebarRight.js";
import { useEffect } from "react";
import axios from "axios";

export default function Main({
	setPost,
	setComment,
	setUsers,
	comments,
	users,
	post,
	user,
	API,
}) {
	// FETCH - USERS
	const getUsers = () => {
		axios.get(`${API}/users`).then((response) => setUsers(response.data));
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

	return (
		<div className='bg-main'>
			<div class="flex h-screen bg-[url('')] ">
				<div class='flex-1 flex flex-col overflow-hidden'>
					<div class='flex h-full'>
						<Left users={users} />
						<main class=''>
							<Feed post={post} user={user} users={users} comments={comments} API={API} />
						</main>
						<Right user={user} API={API} />
					</div>
				</div>
			</div>
		</div>
	);
}
