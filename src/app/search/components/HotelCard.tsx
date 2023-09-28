import Pricing from "@/app/components/Pricing";
import { HotelCardType } from "@/app/page";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import Link from "next/link";

interface HotelCardProps {
	hotel: HotelCardType;
}

export default function HotelCard({ hotel }: HotelCardProps) {
	const renderRatingText = () => {
		const rating = calculateReviewRatingAverage(hotel.reviews);

		if (rating > 4) {
			return "Awesome";
		} else if (rating <= 4 && rating > 3) {
			return "Good";
		} else if (rating <= 3 && rating > 2) {
			return "Average";
		} else {
			return "Not rated yet";
		}
		return rating;
	}

	return (
		<div className="border-b flex pb-5 ml-4">
			<img src={hotel.image} alt="" className="w-44 h-36 rounded" />
			<div className="pl-5">
				<h2 className="text-3xl">{hotel.name}</h2>
				<div className="flex items-start">
					<div className="flex mb-2">*****</div>
					<p className="ml-2 text-sm">{renderRatingText()}</p>
				</div>
				<div className="mb-9">
					<div className="font-light flex text-reg">
						<Pricing pricing={hotel.pricing} />
						{/* <p className="mr-4 capitalize">{hotel.cuisine.name}</p> */}
						<p className="mr-4 capitalize">{hotel.location.name}</p>
					</div>
				</div>
				<div className="text-red-600">
					<Link href={`/hotel/${hotel.slug}`}>
						View more information
					</Link>
				</div>
			</div>
		</div>
	);
}
