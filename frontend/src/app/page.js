import Calendar from "./components/calender/calendar";
import CustomCalendar from "./components/CCalendar/CustomCalendar";
import Grid from "./components/table/table";

export default function Home() {
	//hello
	return (
		<div className="h-[100vh] w-[100vw] bg-blue-400 flex items-center justify-center">
			<CustomCalendar />
		</div>
	);
}
