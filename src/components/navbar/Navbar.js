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

export default function Navbar({ modeToggle }) {
	return (
		<div>
			{" "}
			<header class='shadow-sm'>
			
				<div class='flex items-center justify-evenly h-16 px-4 mx-auto max-w-full navcontainer'>
				<div className="logo">
					insert logo here
				</div>
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
									stroke-width='2'
								></path>
							</svg>
						</button>
					</div>

					<div class='flex items-center ml-0 space-x-4'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
						</svg>

						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
						</svg>

						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
						</svg>

						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
						</svg>

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
						
						<form class='hidden mb-0 lg:flex'>
							<div class='relative'>
								<input
									class='h-9 pr-10 w-xl text-xl placeholder-gray-300 border-gray-200 rounded-lg focus:z-10'
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
					</nav>

					<div
						onClick={(event) => {
							event.preventDefault();
							modeToggle();
						}}
						class='items-center hidden space-x-4 lg:flex'
					>

					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
					</svg>

						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
						<path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
						</svg>

					
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8  smallicon">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>

						
						<a
							class= 'bg-lime-500 inline-block px-5 py-3 ml-3 text-sm font-lg  rounded-lg'
							href=''
						>
							Logout
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
						<a class='flex-shrink-0 pl-4 text-gray-900' href=''>
							Contact
						</a>
					</nav>
				</div>
			</header>{" "}
		</div>
	);
}
