/** @format */
"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
export default function Home() {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		if (!session) {
			router.push("/Login");
		}
	}, [session]);
	return (
		<div>
			<button onClick={() => signOut()}>signOut</button>
		</div>
	);
}
