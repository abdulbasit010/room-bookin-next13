import { PrismaClient } from "@prisma/client";
import { HotelCardType } from "../page";
import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import SearchSideBar from "./components/SearchSideBar";

export interface SearchParams {
	location?: string;
	pricing?: string;
}

const prisma = new PrismaClient();

const fetchHotels = async (
	searchParams: SearchParams
): Promise<HotelCardType[]> => {
	const select = {
		id: true,
		name: true,
		image: true,
		pricing: true,
		location: true,
		slug: true,
		reviews: true,
	};

	const where: any = {};

	if (searchParams.location) {
		const location = {
			name: {
				equals: searchParams.location.toLowerCase(),
			},
		};
		where.location = location;
	}

	if (searchParams.pricing) {
		const pricing = {
			equals: searchParams.pricing,
		};
		where.pricing = pricing;
	}

	return prisma.hotel.findMany({
		where,
		select,
	});
};

const fetchLocations = async () => {
	return prisma.location.findMany();
};

export default async function Search({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const hetels = await fetchHotels(searchParams);
	const locations = await fetchLocations();
	// const cuisines = await fetchCuisines();

	return (
		<>
			<Header />
			<div className="flex py-4 m-auto w-2/3 justify-between items-start">
				<SearchSideBar
					locations={locations}
					searchParams={searchParams}
				/>
				<div className="w-5/6">
					{hetels.length ? (
						<>
							{hetels.map((hotel) => (
								<HotelCard hotel={hotel} key={hotel.id} />
							))}
						</>
					) : (
						<p>Sorry, no hotel found in this category or area</p>
					)}
				</div>
			</div>
		</>
	);
}
