import Form from "./components/Form";
import Header from "./components/Header";

export interface SearchParams {
	hotel?: string;
	room?: string;
}

export default function Booking({
	searchParams,
}: {
	searchParams: SearchParams;
}) {

	return (
		<div className="border-t h-screen">
			<div className="py-9 w-3/5 m-auto">
				<Header />
				<Form />
			</div>
		</div>
	);
}
