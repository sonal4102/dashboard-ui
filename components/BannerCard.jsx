import React from "react";
import { RiFlashlightLine } from "react-icons/ri";

function BannerCard() {
	return (
		<div className="px-5 py-8 flex items-center justify-between bg-[#36454F] text-white rounded rounded-xl ">
			<div className="space-y-3">
				<h1 className="text-2xl font-medium ">Unclock premium stats</h1>
				<p className="text-sm ">Get up to 10TB for storage for a limited time</p>
            </div>
            <div className="px-4 py-2 rounded rounded-3xl bg-white text-black font-medium flex items-center"><RiFlashlightLine size={ 20 } /><button className="ml-2">Upgrade</button></div>
		
		</div>
	);
}

export default BannerCard;
