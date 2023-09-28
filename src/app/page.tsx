import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import { Location, PRICING, PrismaClient, Review, Booking } from "@prisma/client";

export interface HotelCardType {
	id: number;
	name: string;
	image: string;
	slug: string;
	location: Location;
	pricing: PRICING;
	reviews: Review[];
	booking: Booking[]
}

const prisma = new PrismaClient();

const fetchHotels = async (): Promise<HotelCardType[]> => {
	const hotels = await prisma.hotel.findMany(
		{select: {
			id: true,
			name: true,
			image: true,
			slug: true,
			pricing: true,
			location: true,
			reviews: true,
			bookings:true,
		}}
	);
	return hotels;
}

export default async function Home() {
	const hotels = await fetchHotels();

	return (
		<main>
			<Header />
			<div className="py-3 md:px-36 mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 justify-center">
				{hotels.map((hotel) => (
					<HotelCard key= 'hotel' hotel={hotel} />
				))}
			</div>
		</main>
	);
}
