/** @format */
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const HeaderNavbar = () => {
	const { data: session } = useSession();
	return (
		<div className='flex items-center flex-wrap md:flex-nowrap justify-between'>
			<div className='flex gap-5 items-center'>
				<Image src='/header-logo.png' width={65} height={65} alt='Logo' priority />
				<h2>Home</h2>
				<h2>Favourite</h2>
			</div>
			<div className='bg-gray-100 p-[6px] mt-3 md:mt-0 ml-0 md:ml-5 rounded-md w-full md:w-[70%] gap-2 flex'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-8 h-8'>
					<path fillRule='evenodd' d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z' clipRule='evenodd' />
				</svg>
				<input type='text' placeholder='Search' className='w-full px-4 bg-transparent border-none rounded-l-lg focus:outline-none' />
			</div>
			<div className='flex justify-end w-full md:w-[5%] mt-3 md:mt-0'>
				{session?.user ? <Image src={session.user.image} alt='user' width={50} height={50} className='rounded-full mr-20' /> : null}
			</div>
		</div>
	);
};

export default HeaderNavbar;
