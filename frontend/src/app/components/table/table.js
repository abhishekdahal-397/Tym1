// src/Grid.js
import React from "react";
import "./table.css";

const Grid = () => {
	// Create an array with 36 elements (6x6 grid)
	const gridItems = Array.from({ length: 25 }, (_, index) => index + 1);
	const todayDate = new Date();
	console.log(todayDate);

	return (
		<div className="grid-container bg-white w-40 h-40">
			<div className="grid-item">sun</div>
			<div className="grid-item">mon</div>
			<div className="grid-item">tue</div>
			<div className="grid-item">wed</div>
			<div className="grid-item">thu</div>
			{gridItems.map((item) => (
				<div key={item} className="grid-item">
					{item}
				</div>
			))}
		</div>
	);
};

export default Grid;
