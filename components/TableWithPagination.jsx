import Link from "next/link";
import React, { useState } from "react";

const TableWithPagination = ({ data, itemsPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handleClick = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	return (
        <div className="flex flex-col bg-white px-5 pt-2  rounded rounded-3xl ">
            <h1 className="font-semibold py-3">Installed Apps </h1>
			<div className="overflow-x-auto ">
                <table className="min-w-full  border-t  border-gray-300 ">
                    
					<thead className="bg-gray-200 2xl:h-[50px]">
						<tr className="text-left">
							<th className="px-4 py-2 font-medium ">Source</th>
							<th className="px-4 py-2  font-medium">Amount</th>
							<th className="px-4 py-2  font-medium text-center">
								Status
							</th>

							<th className="px-4 py-2  font-medium">User ID</th>
							<th className="px-4 py-2  font-medium">Joined</th>

							<th className="px-4 py-2  font-medium">Group</th>
						</tr>
					</thead>
					<tbody className="text-sm font-medium text-gray-500 ">
						{currentItems.map((item, index) => (
							<tr key={index}>
								<td className="flex flex-wrap border lg:flex lg:items-center lg:space-x-3 px-4 py-2 2xl:h-[48px]">
									<img
										src={item.icon}
										width={40}
										height={40}
										className="w-12 h-12  p-2 shadow shadow-yellow-100 rounded-lg"
									/>
									<span>{item.details}</span>
								</td>
								<td className="border px-4 py-2">
									{item.amount}
								</td>
								<td className="border px-4 py-2 text-center">
									<p
										className={`rounded-2xl inline py-0.5 px-2.5 ${
											item.status === "Active"
												? "bg-green-100 text-green-600"
												: item.status === "Pending"
												? "bg-orange-100 text-orange-600"
												: "bg-gray-100 text-gray-600"
										}`}
									>
										{item.status}
									</p>
								</td>
								<td className="border px-4 py-2">
									{item.userID}
								</td>
								<td className="border px-4 py-2">
									{item.joined}
								</td>
								<td className="border px-4 py-2">
									{item.group}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className=" py-4 border-t border-gray-300">
				<nav className="">
					<ul className="pagination flex justify-center space-x-3">
						{[...Array(totalPages)].map((_, index) => (
							<li key={index}>
								<button
									className={`${
										currentPage === index + 1
											? "bg-gray-200 text-black rounded-3xl"
											: " text-gray-700 rounded-3xl"
									} font-semibold py-2 px-4 `}
									onClick={() => handleClick(index + 1)}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default TableWithPagination;
