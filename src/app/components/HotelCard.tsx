import Link from "next/link";
import { HotelCardType } from "../page";

interface HotelCardProps {
	hotel: HotelCardType;
}

export default function HotelCard({ hotel }: HotelCardProps) {
	return (
		<Link href={`/hotel/${hotel.slug}`} className="flex w-full md:h-72 flex-col items-center cursor-pointer bg-white border border-gray-200 rounded shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<img
				className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg"
				src={hotel.image}
				alt="" />
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
			</div>
		</Link>
	);
}
