import React from "react";
import { RiFlashlightLine } from "react-icons/ri";

function BannerCard() {
	return (
		<div className="lg:px-8 px-5  py-8 lg:flex lg:flex-row lg:items-center flex flex-col items-center justify-center lg:justify-between bg-[#36454F] text-white rounded rounded-xl lg:space-y-0 space-y-5">
			<div className="lg:space-y-3 space-y-5">
				<h1 className="text-2xl lg:text-3xl font-medium text-center lg:text-left">Unclock premium stats</h1>
				<p className="text-sm text-center lg:text-left">
					Get up to 10TB for storage for a limited time
				</p>
			</div>
			<div className="px-4 py-2 rounded rounded-3xl bg-white text-black font-medium flex items-center  w-[150px] lg:w-auto">
				<RiFlashlightLine size={20} />
				<button className="ml-2">Upgrade</button>
			</div>
		</div>
	);
}

export default BannerCard;
