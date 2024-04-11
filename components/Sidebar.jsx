import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	IoIosApps,
	IoIosArrowDown,
	IoIosArrowForward,
	IoMdMenu,
} from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";

import {
	FiFolder,
	FiHelpCircle,
	FiMessageCircle,
	FiUser,
} from "react-icons/fi";

const DropdownSection = ({ labelText, IconComponent, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<div className="mb-2">
			<button
				onClick={handleToggle}
				className="flex items-center justify-between cursor-pointer my-2 ml-4 rounded-lg w-full text-left"
			>
				<div className="flex items-center">
					<IconComponent size={20} className="mr-4" />
					{labelText}
				</div>
				{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
			</button>
			{isOpen && <div className="mt-2 ml-12">{children}</div>}
		</div>
	);
};

const Sidebar = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="flex">
			{/* Mobile Menu Icon */}
			<div className="lg:hidden fixed top-0 left-0 z-20">
				<button className="p-6" onClick={handleSidebar}>
					<IoMdMenu size={30} />
				</button>
			</div>

			{/* Sidebar */}
			<div
				className={`fixed w-64 h-full overflow-y-auto p-4 bg-white border-r transition transform duration-300 ease-in-out ${
					sidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0`}
			>
				<div className="lg:hidden text-right">
					<button onClick={handleSidebar}>
						<RiCloseLine size={44} />
					</button>
				</div>

				<div className="flex flex-col items-start pt-8 lg:pt-0">
					<Link href="/" className="lg:block hidden">
						<div className="mb-4 px-3 text-center cursor-pointer items-center space-x-3">
							<RxSketchLogo
								size={40}
								className="inline-block mb-2"
							/>
							<span className="text-2xl font-medium">Logo</span>
						</div>
					</Link>
					<h1 className="text-gray-400  pl-4 my-2 uppercase tracking-widest">
						Dashboard
					</h1>
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
					<DropdownSection labelText="Friends" IconComponent={FiUser}>
						<Link href="/">
							<span className="block py-1">Personal</span>
						</Link>
						<Link href="/">
							<span className="block py-1">Wishlist</span>
						</Link>
					</DropdownSection>
					<DropdownSection labelText="Apps" IconComponent={IoIosApps}>
						<Link href="/">
							<span className="block py-1">Account settings</span>
						</Link>
						<Link href="/">
							<span className="block py-1">App settings</span>
						</Link>
					</DropdownSection>
					<h1 className="text-gray-400  pl-4 my-2 uppercase tracking-widest">
						Pages
					</h1>
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

			{/* Main Content */}
			<main className="ml-0 w-full lg:ml-64">{children}</main>
		</div>
	);
};

export default Sidebar;
