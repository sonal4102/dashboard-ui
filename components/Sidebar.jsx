import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosApps, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiFolder, FiHelpCircle, FiMessageCircle, FiSettings, FiUser } from "react-icons/fi";

const DropdownSection = ({ labelText, IconComponent, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<div className="mb-2 text-gray-600">
			<button
				onClick={handleToggle}
				className="flex items-center justify-between  cursor-pointer my-3 px-4 rounded-lg inline-block w-full text-left"
			>
				<div className="flex items-center mr-2">
					<IconComponent size={20} className="mr-4 " />
					<span className="text-lg font-medium ">{labelText}</span>
				</div>
				{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
			</button>
			{isOpen && (
				<div className="mt-2 pl-12 ">{children}</div>
			)}
		</div>
	);
};

const Sidebar = ({ children }) => {
	return (
		<div className="lg:flex hidden ">
			<div className="fixed w-68 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between overflow-auto">
				<div className="flex flex-col items-start">
					<Link href="/">
						<div className="mb-8 pl-2 flex items-center space-x-3 ">
							<RxSketchLogo size={44} className=" " />
							<h1 className="font-medium text-2xl">Logo</h1>
						</div>
                    </Link>
                    <h1 className="text-gray-400  pl-4 my-2 uppercase tracking-widest">Dashboard</h1>
					<DropdownSection
						labelText="Dashboard"
						IconComponent={RxDashboard}
					>
						<Link href="/">
							<span className="block py-1">Analytics</span>
						</Link>
						<Link href="/">
							<span className="block py-1">Finance</span>
						</Link>
						<Link href="/">
							<span className="block py-1">Job Board</span>
						</Link>
					</DropdownSection>
					<DropdownSection
						labelText="Messages"
						IconComponent={FiMessageCircle}
					>
						<Link href="/">
							<span className="block py-1">Settings</span>
						</Link>
						<Link href="/">
							<span className="block py-1">Friends</span>
						</Link>
					</DropdownSection>
					<DropdownSection
						labelText="Friends"
						IconComponent={FiUser}
					>
						<Link href="/">
							<a className="block py-1">Personal</a>
						</Link>
						<Link href="/">
							<a className="block py-1">Wishlist</a>
						</Link>
					</DropdownSection>
					<DropdownSection
						labelText="Apps"
						IconComponent={IoIosApps}
					>
						<Link href="/">
							<a className="block py-1">Account settings</a>
						</Link>
						<Link href="/">
							<a className="block py-1">App settings</a>
						</Link>
					</DropdownSection>
					 <h1 className="text-gray-400  pl-4 my-2 uppercase tracking-widest">Pages</h1>
					<DropdownSection
						labelText="Help Center"
						IconComponent={FiHelpCircle}
					>
						<Link href="/">
							<span className="block py-1">Overview</span>
						</Link>
						<Link href="/">
							<span className="block py-1">Reports</span>
						</Link>
					</DropdownSection>
					<DropdownSection
						labelText="File Manager"
						IconComponent={FiFolder}
					>
						<Link href="/">
							<span className="block py-1">Settings</span>
						</Link>
						<Link href="/">
							<span className="block py-1">Friends</span>
						</Link>
					</DropdownSection>
				</div>
			</div>
			<main className="ml-64 w-full">{children}</main>
		</div>
	);
};

export default Sidebar;
