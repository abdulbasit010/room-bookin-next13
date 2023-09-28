import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<div className="h-64 bg-blue-500 p-2">
			<div className="text-center mt-10">
				<h1 className="text-white text-5xl font-bold">
				Search for Hotels
				</h1>
				<p className="text-white text-xl mb-3">Find the best and most affordable hotel rooms across Pakistan</p>
				<SearchBar />
			</div>
		</div>
	);
}
