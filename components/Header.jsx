import React from "react";
import Link from "next/link";
import { RxAvatar, RxDashboard, RxSketchLogo } from "react-icons/rx";
import { RiNotification2Fill } from "react-icons/ri";
import {
	IoIosApps,
	IoIosCalendar,
	IoIosNotificationsOutline,
} from "react-icons/io";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-4 lg:py-5 py-3 bg-gray-200">
			<div>
				<Link href="/" className="lg:hidden">
					<div className=" text-center cursor-pointer  flex items-center space-x-3">
						<RxSketchLogo size={35} className="inline-block" />
						<span className="text-xl font-medium">Logo</span>
					</div>
				</Link>
			</div>
			<div className="lg:inline-block hidden lg:flex items-center justify-center space-x-7 text-gray-600">
				<IoIosNotificationsOutline size={30} />{" "}
				<IoIosCalendar size={24} /> <RxDashboard size={24} />{" "}
				<RxAvatar size={30} />
			</div>
		</div>
	);
};

export default Header;
