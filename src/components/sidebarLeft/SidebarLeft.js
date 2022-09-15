import React from "react";

export default function SidebarLeft() {
	return (
		<div>
			<div class='w-80 h-full border-gray-200 shadow-md bg-white px-1 '>
				<ul class='relative mt-5'>
					<li class='relative'>
						<a
							class='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
							href='#!'
							data-mdb-ripple='true'
							data-mdb-ripple-color='dark'
						>
							<p className='pr-14 mr-20'>Friends</p>
							<svg
								class='h-8 w-8 text-red-500 '
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								{" "}
								<circle cx='12' cy='12' r='1' />{" "}
								<circle cx='19' cy='12' r='1' /> <circle cx='5' cy='12' r='1' />
							</svg>
						</a>
					</li>
					<li class='relative'>
						<a
							class='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
							href='#!'
							data-mdb-ripple='true'
							data-mdb-ripple-color='dark'
						>
							<img
								src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg'
								alt='avatar image'
								class='inline-flex items-center justify-center w-12 h-12 mr-2 text-white transition-all duration-200 ease-in-out text-sm rounded-xl'
							/>
							<p className='bg-yellow-300 p-7 text-xs leading-tight uppercase rounded shadow-md '>
								Señor Potato
							</p>
							<button
								type='button'
								class='ml-8 inline-block px-1 py-1 bg-green-500 text-white font-small text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
							></button>{" "}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
