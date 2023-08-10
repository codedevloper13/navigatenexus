/** @format */

import React, { useState } from "react";
import Data from "../../Shared/Data";
import Image from "next/image";

const CategoryList = () => {
	const [categoryList, SetCategoryList] = useState(Data.CategoryListData);
	return (
		<div>
			<h2 className='flex font-bold m-2'>Select Delicious Food Type</h2>
			<div>
				{categoryList.map((item) => (
					<div className='flex flex-col justify-center items-center bg-gray-100 p-4 m-2 rounded w-[200px] bg-gradient-to-r from-neutral-300 to-stone-400' key={item.id}>
						<Image src={item.icon} alt={item.name} width={50} height={50} />
						<span className="font-semibold">{item.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
