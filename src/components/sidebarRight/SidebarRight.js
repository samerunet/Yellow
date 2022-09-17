import React, { useState } from "react";
import Posticon from "./Posticon";




<<<<<<< HEAD
export default function SidebarRight() {

const [showicon, setShowIcon] = useState(false); 


const toggleIcon = () => {

	setShowIcon(true);

}



	return(
		<div className="w-64 max-h-full h-screen bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white right-bar">
				<div className="flex justify-end px-4 pt-4">
				</div>
				<div className="flex flex-col items-center pb-10  md:mt-10">
					<img alt="profilepic"src="https://i.pinimg.com/736x/bf/57/6a/bf576a8b45668b408d04c5729c528c4b--potato-kawaii.jpg" className="mb-3 w-24 h-24 rounded-full shadow-lg"/>
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black ">Senor Potato</h5>
					<span className="text-sm text-gray-500 dark:text-gray-400"></span>
						
						<div className="flex mt-4 space-x-3 md:mt-6">
							<div 
								className="inline-block items-center py-2 px-4 text-sm font-medium text-center text-gray-900  rounded-lg  focus:ring-4 focus:outline-none   dark:text-white  dark:hover:bg-lime-700 dark:focus:ring-gray-700">
									<h2 className="text-yellow-300">11K</h2>
									<h5 className="text-black">Followers</h5> 
							</div>
							<div 	
								className="inline-block items-center py-2 px-4 text-sm font-medium text-center text-gray-900  rounded-lg  focus:ring-4 focus:outline-none   dark:text-white dark:hover:bg-lime-700  dark:focus:ring-gray-700">
									<h3 className="text-yellow-300">1.4K</h3>
									<h5 className="text-black">Following</h5>
							</div>
					
				
						</div>
						<div className="flex mt-4 space-x-3 md:mt-10">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-300 ">
										<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<h5 className="dark:hover:text-lime-700">Profile</h5>
						</div>
						<div className="flex mt-4 space-x-3 md:mt-6">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-300">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<h5 onClick={toggleIcon} className="dark:hover:text-lime-700">Post</h5>
							{showicon ? <Posticon setShowIcon={setShowIcon}/> : null}
						</div>
						<div className="flex mt-4 space-x-3 md:mt-6">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-300">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
							</svg>
							<h5  className="dark:hover:text-lime-700">Request</h5>
						</div>
						<div className="flex mt-4 space-x-3 md:mt-12">
							<div className="inline-block">
							<h5 className="dark:hover:text-lime-700">Settings and Privacy</h5>
							</div>
						
						</div>
						<div className="flex mt-4 space-x-3 md:mt-6">
							<div className="inline-block">
							<h5  className="dark:hover:text-lime-700">Help Center</h5>
							</div>
						</div>
=======
export default function SidebarRight({ user }) {
	return (
		<div className='w-64 max-h-full h-screen bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white right-bar'>
			<div className='flex justify-end px-4 pt-4'></div>
			<div className='flex flex-col items-center pb-10  md:mt-10'>
				<img
					alt='profilepic'
					src='https://i.pinimg.com/736x/bf/57/6a/bf576a8b45668b408d04c5729c528c4b--potato-kawaii.jpg'
					className='mb-3 w-24 h-24 rounded-full shadow-lg'
				/>
				<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-black '>
					Senor Potato
				</h5>
				<span className='text-sm text-gray-500 dark:text-gray-400'></span>

				<div className='flex mt-4 space-x-3 md:mt-6'>
					<div className='inline-block items-center py-2 px-4 text-sm font-medium text-center text-gray-900  rounded-lg  focus:ring-4 focus:outline-none   dark:text-white  dark:hover:bg-lime-700 dark:focus:ring-gray-700'>
						<h2 className='text-yellow-300'>11K</h2>
						<h5 className='text-black'>Followers</h5>
					</div>
					<div className='inline-block items-center py-2 px-4 text-sm font-medium text-center text-gray-900  rounded-lg  focus:ring-4 focus:outline-none   dark:text-white dark:hover:bg-lime-700  dark:focus:ring-gray-700'>
						<h3 className='text-yellow-300'>1.4K</h3>
						<h5 className='text-black'>Following</h5>
					</div>
				</div>
				<div className='flex mt-4 space-x-3 md:mt-10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 text-yellow-300 '
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
						/>
					</svg>
					<h5 className='dark:hover:text-lime-700'>Profile</h5>
				</div>
				<div className='flex mt-4 space-x-3 md:mt-6'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 text-yellow-300'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<h5 className='dark:hover:text-lime-700'>Post</h5>
				</div>
				<div className='flex mt-4 space-x-3 md:mt-6'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 text-yellow-300'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
						/>
					</svg>
					<h5 className='dark:hover:text-lime-700'>Request</h5>
				</div>
				<div className='flex mt-4 space-x-3 md:mt-12'>
					<div className='inline-block'>
						<h5 className='dark:hover:text-lime-700'>Settings and Privacy</h5>
					</div>
				</div>
				<div className='flex mt-4 space-x-3 md:mt-6'>
					<div className='inline-block'>
						<h5 className='dark:hover:text-lime-700'>Help Center</h5>
					</div>
>>>>>>> 1df0497788d34dbd25c03aa0f285bba9d66ee3ef
				</div>
			</div>
		</div>
	);
}
