import "./App.css";
import Login from "./components/login/Login.js";
import Nav from "./components/navbar/Navbar.js";
import Feed from "./components/feed/Feed.js";
import Left from "./components/sidebarLeft/SidebarLeft.js";
import Right from "./components/sidebarRight/SidebarRight.js";

import { useState, useEffect } from "react";
import axios from "axios";

// first step to validate the login 👍
// second step will be to create a new user 👍
// third step will be to update password (optional)
// validated user creating a post
// any user can comment on any post

function App() {
	// const [username, setUsername] = useState(" ");
	// const [password, setPassword] = useState(" ");
	const [users, setUsers] = useState([]);
	const [post, setPost] = useState([]);
	const [comment, setComment] = useState([]);
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
		axios.get(`${API}/posts`).then((response) =>
			setPost(response.data)
		)
	}
	// FETCH - COMMENTS
	const getComments = () => {
		axios.get(`${API}/comments`).then((response) =>
			setComment(response.data)
		)
	}


	useEffect(() => {
		getUsers();
		getPosts();
		getComments();
	}, []);

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleLogin = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/users/login`, {
				username: username,
				password: password,
			})
			.catch((error) => {
				if (error) {
					alert("Email or password does not match records");
				}
			})
			.then((response) => {
				// console.log(userAccount)
				console.log(response.data);
			});
		// .then((response) => { }))
	};

	const handleCreateuser = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/users/`, {
				username: username,
				password1: password,
				password2: password,
			})
			.then((response) => {
				// console.log(userAccount)
				console.log(response);
			});
	};
	// useEffect(() => {
	// 	getIncoming();
	// }, []);

	const MainContent = (event) => {
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
	};

	return (
		<div className='App'>
			{/* <Login
				handleLogin={handleLogin}
				handleUsername={handleUsername}
				handlePassword={handlePassword}
			/>
			<MainContent /> */}
			<form onSubmit={handleLogin}>
				<input
					className='bg-yellow-300'
					name='username'
					type='text'
					className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
					placeholder='Enter username'
					onChange={handleUsername}
				/>
				<input
					name='password'
					type='text'
					className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
					placeholder='Enter password'
					onChange={handlePassword}
				/>
				<button className='text-lemon-300' type='submit'>
					submit to log in{" "}
				</button>
			</form>
			{/* <form onSubmit={handleCreateuser}>
				<input
					className='bg-yellow-300'
					name='username'
					type='text'
					className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
					placeholder='Enter username'
					onChange={handleUsername}
				/>
				<input
					name='password'
					type='text'
					className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
					placeholder='Enter password'
					onChange={handlePassword}
				/>
				<input
					name='password'
					type='text'
					className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
					placeholder='Enter password'
					onChange={handlePassword}
				/>
				<button className='text-lemon-300' type='submit'>
					submit to log in{" "}
				</button>
			</form> */}
		</div>
	);
}

export default App;
