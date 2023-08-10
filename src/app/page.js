/** @format */
"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import CategoryList from "../../components/Home/CategoryList";
export default function Home() {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		if (!session) {
			router.push("/Login");
		}
	}, [session]);
	return (
		<div className='grid grid-cols-4 h-screen'>
			<div className=''>
				<CategoryList />
			</div>
			<div className='col-span-3'></div>
		</div>
	);
}
