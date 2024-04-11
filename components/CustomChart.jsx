import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CustomChart = () => {
	// Function to generate random data
	const generateRandomData = () => {
		const data = [];
		for (let i = 0; i < 7; i++) {
			data.push(Math.floor(Math.random() * 401));
		}
		return data;
	};

	const options = {
		chart: {
			type: "area",
		},
		accessibility: {
			description:
				"Image description: An area chart comparing random values between 0 and 400 for each day of the week.",
		},
		title: {
			text: "Performance",
		},
		xAxis: {
			categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			accessibility: {
				rangeDescription: "Range: Mon to Sun.",
			},
		},
		yAxis: {
			title: {
				text: "Value",
			},
		},
		series: [
			{
				name: "Instagram",
				color: "#90EE90",
				data: generateRandomData(),
			},
			{
				name: "Facebook",
				color: "#ADD8E6",
				data: generateRandomData(),
			},
		],
	};

	return (
		<>
			{" "}
			<h1 className="font-semibold text-xl mb-5">Performance </h1>{" "}
			<HighchartsReact highcharts={Highcharts} options={options} />
		</>
	);
};

export default CustomChart;
