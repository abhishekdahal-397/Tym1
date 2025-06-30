"use client";
import React, { useEffect, useState } from "react";
import styles from "./calendar.module.css";

const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [todayDate, setTodayDate] = useState(null);
	const [highlightedDate, setHighlightedDate] = useState(null);
	const [month, setMonth] = useState("");
	//make arr from 32 to 45

	const makeArr = () => {
		const numbers = [];
		for (i = 32; i < 46; i++) {
			numbers.push(i);
		}
		console.log(numbers);
	};
	useEffect(() => {
		highlightDate();
	}, []);

	// Get the first day of the current month
	const startOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		1
	);
	const customMonthNames = {
		Janauary: "AAd",
		February: "BB",
		March: "CCC",
		April: "DD",
		May: "EE",
		June: "FF",
		July: "GG",
		August: "HH",
		September: "II",
		October: "JJ",
		November: "KK",
		December: "LL",
	};
	const monthName = currentDate.toLocaleString("default", { month: "long" });
	const customMonthName = customMonthNames[monthName];
	console.log("startOfMonth:", startOfMonth);

	const highlightDate = () => {
		const today = {
			year: currentDate.getFullYear(),
			month: currentDate.getMonth(),
			day: currentDate.getDate(),
		};
		setHighlightedDate(today);
		console.log("highlightedDate:", highlightedDate);
	};

	const endOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	);
	const daysInMonth = endOfMonth.getDate();

	// Get the day of the week for the 1st of the month
	const startDay = startOfMonth.getDay();
	const days = [];
	for (let i = 0; i < startDay; i++) {
		days.push(null); // Empty cells for days before the start of the month
	}
	for (let i = 1; i <= daysInMonth; i++) {
		days.push(i);
	}

	// Handle changing months
	const handlePrevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);
	};

	const handleNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);
	};
	const customDayNames = ["ZA", "ZB", "ZC", "ZD", "ZE"];

	return (
		<div className={styles.calendar}>
			<header className={styles.header}>
				<button onClick={handlePrevMonth}>&lt;</button>
				<h2>
					<span className="mx-2">{customMonthName}</span>
					{currentDate.getFullYear().toString().substring(2, 4)}
				</h2>
				<button onClick={handleNextMonth}>&gt;</button>
			</header>
			{/* <div className={styles.days}>
			
			</div> */}
			<div className={styles.grid}>
				{customDayNames.map((dayName, index) => (
					<div key={index} className={styles.dayHeader}>
						{dayName}
					</div>
				))}
				{days.map((day, index) => (
					<div
						key={index}
						className={`${styles.cell} ${
							day === highlightedDate?.day &&
							currentDate.getMonth() === highlightedDate?.month &&
							currentDate.getFullYear() === highlightedDate?.year
								? styles.highlight
								: ""
						} `}
					>
						{day}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
