import React from "react";
import style from "./table.css"; // Optional: Add CSS for styling

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu"];

const Grid = () => {
	// Create an array of 45 days
	const days = Array.from({ length: 45 }, (_, i) => i + 1);

	return (<><div className="calendar">
			<div className=" h-5 w-50 bg-white"></div>
			{/* Render the days of the week */}
			{daysOfWeek.map((day) => (
				<div key={day} className="day-name">
					{day}
				</div>
			))}
			{/* Render the days in the calendar */}
			{days.map((day) => (
				<div key={day} className="day-number">
					{day}
				</div>
			))}
		</div>
	</>
		
	);
};

export default Grid;
