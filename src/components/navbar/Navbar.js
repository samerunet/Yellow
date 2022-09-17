// ///////CREATE USER - new user login //////////
// const userSignup = (addUser) => {
// 	axios
// 		// .post(localUsersUrl, addUser)
// 		.post(herokuUsersUrl, addUser)
// 		.then((response) => {
// 			console.log(response);
// 			// getUsers()
// 			setUsers([...users, addUser]);
// 			props.setView("login");
// 		});
// };
// ////////////////////////////////////////////////////////////
// // CRUD Functionality - USERS (api/useraccount/login)
// //      // returning user login
// ////////////////////////////////////////////////////////////
// // returning user login
// const handleUpdateUser = (userAccount) => {
// 	axios
// 		// .put(localLoginUrl, userAccount)
// 		.put(herokuLoginUrl, userAccount)
// 		.catch((error) => {
// 			if (error) {
// 				alert("Email or password does not match records");
// 				setLoginError(true);
// 			}
// 		})
// 		.then((response) => {
// 			// console.log(userAccount)
// 			console.log(response.data);
// 			props.setCurrentUser(response.data.email);
// 			props.setCurrentUserID(response.data.id);
// 			// props.setCurrentCartID(response.data.id)
// 			props.setView("main");
// 		});
// };

// // returning user login
// const handleUpdateUser = (userAccount) => {
// 	axios
// 		// .put(localLoginUrl, userAccount)
// 		.put(herokuLoginUrl, userAccount)
// 		.catch((error) => {
// 			if (error) {
// 				alert("Email or password does not match records");
// 				setLoginError(true);
// 			}
// 		})
// 		.then((response) => {
// 			// console.log(userAccount)
// 			console.log(response.data);
// 			props.setCurrentUser(response.data.email);
// 			props.setCurrentUserID(response.data.id);
// 			// props.setCurrentCartID(response.data.id)
// 			props.setView("main");
// 		});
// };

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ modeToggle = () => {} }) {
	const location = useLocation();
	if (location.pathname !== "/login") {
		return (
			<div>
				{" "}
				<header class='shadow-sm'>
					<div class='flex items-center justify-between h-16 px-4 mx-auto max-w-screen-xl'>
						<div class='flex flex-1 w-0 lg:hidden'>
							<button
								class='p-2 text-gray-600 bg-gray-100 rounded-full'
								type='button'
							>
								<svg
									class='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewbox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
										stroke-linecap='round'
										stroke-linejoin='round'
										strokeWidth='2'
									></path>
								</svg>
							</button>
						</div>

						<div class='flex items-center space-x-4'>
							<span class='w-20 h-10 bg-gray-200 rounded-lg'></span>

							<form class='hidden mb-0 lg:flex'>
								<div class='relative'>
									<input
										class='h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10'
										placeholder='Search...'
										type='text'
									/>

									<button
										class='absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg'
										type='submit'
									>
										<svg
											class='w-5 h-5'
											fill='currentColor'
											viewbox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												clip-rule='evenodd'
												d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
												fill-rule='evenodd'
											></path>
										</svg>
									</button>
								</div>
							</form>
						</div>

						<div class='flex justify-end flex-1 w-0 lg:hidden'>
							<button
								class='p-2 text-gray-500 bg-gray-100 rounded-full'
								type='button'
							>
								<svg
									class='w-5 h-5'
									fill='currentColor'
									viewbox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										clip-rule='evenodd'
										d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
										fill-rule='evenodd'
									></path>
								</svg>
							</button>
						</div>

						<nav class='items-center justify-center hidden text-sm font-medium space-x-8 lg:flex lg:flex-1 lg:w-0'>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/`}>
								Home
							</Link>
							<a class='text-gray-900' href=''>
								Blog
							</a>
							<a class='text-gray-900' href=''>
								Projects
							</a>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/contact`}>
								Contact
							</Link>
						</nav>

						<div
							onClick={(event) => {
								event.preventDefault();
								modeToggle();
							}}
							class='items-center hidden space-x-4 lg:flex'
						>
							<a
								class='px-5 py-2 text-sm font-medium text-gray-600  rounded-lg '
								href=''
							>
								<svg
									class='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										strokeWidth='2'
										d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
									></path>
								</svg>
							</a>
							<a
								class='px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg'
								href=''
							>
								Log out
							</a>
						</div>
					</div>

					<div class='border-t border-gray-100 lg:hidden'>
						<nav class='flex items-center justify-center p-4 overflow-x-auto text-sm font-medium'>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								About
							</a>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								Blog
							</a>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								Projects
							</a>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/contact`}>
								Contact
							</Link>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/`}>
								Home
							</Link>
						</nav>
					</div>
				</header>{" "}
			</div>
		);
	} else {
		return;
	}
}
