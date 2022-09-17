import React from "react";
import { useState } from "react";
import Newuser from "./Signup.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login({ setUser,setPermission }) {
	// will validate the user and get user id
	// map through the users and get the specific user data
	//

	const navigate = useNavigate();
	const API = "https://secure-forest-62515.herokuapp.com/api";
	const [username, setUsername] = useState(" ");
	const [password, setPassword] = useState(" ");
	const [signUp, setShowSignUp] = useState(false);

	const showSignUp = () => {
		setShowSignUp(true);
	};

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleLogin = (username, password) => {
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
                setUser(response.data);
				console.log(response.data);
				if (Object.keys(response.data).length === 0) {
					console.log("something went wrong");
                } else {
                    setPermission(true)
					navigate("/");
					// pageToggle();
				}
			});
	};

	return (
		<div>
			<section className='bg-yellow-300  relative flex flex-wrap lg:h-screen lg:items-center'>
				<div className='w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24'>
					<div className='max-w-lg mx-auto text-center'>
						<h1 className='text-2xl font-bold sm:text-3xl'>
							Get started today!
						</h1>

						<p className='mt-4 text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
							nulla eaque error neque ipsa culpa autem, at itaque nostrum!
						</p>
					</div>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							handleLogin(username, password);
						}}
						className='max-w-md mx-auto mt-8 mb-0 space-y-4'
					>
						<div>
							<label htmlFor='text' className='sr-only'>
								Email
							</label>

							<div className='relative'>
								<input
									name='username'
									type='text'
									className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
									placeholder='Enter username'
									onChange={handleUsername}
								/>

								<span className='absolute inset-y-0 inline-flex items-center right-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-5 h-5 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
										/>
									</svg>
								</span>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<div className='relative'>
								<input
									name='password'
									type='password'
									className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
									placeholder='Enter password'
									onChange={handlePassword}
								/>

								<span className='absolute inset-y-0 inline-flex items-center right-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-5 h-5 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
										/>
									</svg>
								</span>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<button
								type='submit'
								className='bg-lime-500 inline-block px-5 py-3 ml-3 text-sm font-lg  rounded-lg'
							>
								Sign in
							</button>
						</div>
					</form>
					<div>
						<button className='underline' onClick={showSignUp}>
							Sign up
							{signUp ? <Newuser /> : null}
						</button>
					</div>
				</div>

				<div className='relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full'>
					<img
						className='absolute inset-0 object-cover w-full h-full'
						src='https://img.freepik.com/free-photo/confident-handsome-man-winking-showing-okay-sign-approval-like-something-good-standing-yello_1258-65908.jpg?w=1380&t=st=1663097929~exp=1663098529~hmac=3976309260f2b9f17dadd1e36dbfc306ea5d045e4774b2a87ea454f3e5f28ae2'
						alt=''
					/>
				</div>
			</section>
		</div>
	);
}
