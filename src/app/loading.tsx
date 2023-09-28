import Header from "./components/Header";

export default function Loading() {
	return (
		<main>
			<Header />
			<div className="py-3 md:px-36 mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 justify-center">
				{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
					<div key={num} className="animate-pulse m-3 bg-slate-200 w-full h-72 rounded overflow-hidden border cursor-pointer"></div>
				))}
			</div>
		</main>
	);
}
