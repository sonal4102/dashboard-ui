import React from "react";

function Card({ name, price, percentage }) {
	let bgColor = "";
	if (percentage === "0%") {
		bgColor = "bg-gray-300 text-gray-600";
	} else {
		const isPositive = percentage.charAt(0) === "+";
		bgColor = isPositive
			? "bg-green-100 text-green-600"
			: "bg-red-100 text-red-600";
	}

	return (
		<div className="p-5 rounded rounded-xl shadow shadow-md bg-gray-100 flex flex-col space-y-3">
			<h1 className="text-gray-600 text-md">{name}</h1>
			<p className="text-gray-800 font-medium text-2xl">{price}</p>
			<div className="flex items-center space-x-4">
				<p
					className={`px-2 py-1 rounded text-sm rounded-3xl ${bgColor}`}
				>
					{percentage}
				</p>
				<p className="text-gray-600 text-sm">From 4.6%</p>
			</div>
		</div>
	);
}

export default Card;
