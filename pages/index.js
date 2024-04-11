import Header from "@/components/Header";
import TableWithPagination from "@/components/TableWithPagination";
import { FiFigma, FiHome } from "react-icons/fi";

export default function Home() {
	const data = [
		{
			id: 1,
			icon: "/zeplin.svg",
			details: "Zepplin",
			userID: "114423",
			joined: "October",
			group: "Design",

			status: "Active",
			amount: "686.00",
		},
			{
			id: 2,
			icon: "/figma.svg",
			details: "Figma",
			userID: "76223",
			joined: "June",
			group: "Finance",

			status: "Pending",
			amount: "864.00",
		},
			{
			id: 3,
			icon: "/meta.svg",
			details: "Meta",
			userID: "89453",
			joined: "March",
			group: "Coding",

			status: "Pending",
			amount: "176.00",
		},
				{
			id: 4,
			icon: "/angular.svg",
			details: "Angular",
			userID: "65453",
			joined: "February",
			group: "Coding",

			status: "Active",
			amount: "176.00",
		},
					{
			id: 5,
			icon: "/vue.svg",
			details: "Vue",
			userID: "11153",
			joined: "October",
			group: "Finance",

			status: "Active",
			amount: "176.00",
		},{
			id: 1,
			icon: "/zeplin.svg",
			details: "Zepplin",
			userID: "114423",
			joined: "October",
			group: "Design",

			status: "Active",
			amount: "686.00",
		},
			{
			id: 2,
			icon: "/figma.svg",
			details: "Figma",
			userID: "76223",
			joined: "June",
			group: "Finance",

			status: "Pending",
			amount: "864.00",
		},
			{
			id: 3,
			icon: "/meta.svg",
			details: "Meta",
			userID: "89453",
			joined: "March",
			group: "Coding",

			status: "Pending",
			amount: "176.00",
		},
				{
			id: 4,
			icon: "/angular.svg",
			details: "Angular",
			userID: "65453",
			joined: "February",
			group: "Coding",

			status: "Active",
			amount: "176.00",
		},
					{
			id: 5,
			icon: "/vue.svg",
			details: "Vue",
			userID: "11153",
			joined: "October",
			group: "Finance",

			status: "Active",
			amount: "176.00",
		}
	];
	return (
		<main>
			<Header />
			<div className="flex flex-col space-y-5 lg:bg-black">
				<div className="lg:p-5  "> <TableWithPagination data={data} itemsPerPage={5} /></div>
				
			</div>
		</main>
	);
}
