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
	if (location.pathname !== "/login" && location.pathname !== "/signup") {
		return (
			<div>
				{" "}
				<header className='shadow-sm thenav'>
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
							<a class='flex-shrink-0 pl-4 text-gray-900 ' href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 profile'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
							</a>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 inbox'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
									/>
								</svg>
							</a>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 addedme'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
									/>
								</svg>
							</a>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/contact`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 contact'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3'
									/>
								</svg>
							</Link>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 home'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
									/>
								</svg>
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
							<a class='flex-shrink-0 pl-4 text-gray-900 ' href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 profile'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
							</a>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 inbox'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
									/>
								</svg>
							</a>
							<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 addedme'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
									/>
								</svg>
							</a>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/contact`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 contact'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3'
									/>
								</svg>
							</Link>
							<Link class='flex-shrink-0 pl-4 text-gray-900' to={`/`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 home'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
									/>
								</svg>
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
