/** @format */
"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Login = () => {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		console.log({ session });
		if (session) {
			router.push("/");
		}
	}, [session]);
	return (
		<div className='flex justify-center items-center mt-[50%]'>
			<button className='bg-blue-400 p-2 rounded-xl px-3 text-white' onClick={() => signIn()}>
				Login With Google
			</button>
		</div>
	);
};

export default Login;
