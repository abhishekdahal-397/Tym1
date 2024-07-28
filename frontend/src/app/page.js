import Calendar from "./components/calender/calendar";
import Grid from "./components/table/table";

export default function Home() {
	return (
		<div className="h-[100vh] w-[100vw] bg-blue-200 flex justify-center items-center">
			<Calendar />
		</div>
	);
}
