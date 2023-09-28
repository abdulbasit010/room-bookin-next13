import { PrismaClient, Review, Booking, Room } from "@prisma/client";
import { notFound } from "next/navigation";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import HotelNavBar from "./components/HotelNavBar";
import Reviews from "./components/Reviews";
import Rooms from "./components/Rooms";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface Hotel {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
  bookings: Booking[];
  rooms: Room[]
}

const fetchHotelBySlug = async (slug: string): Promise<Hotel> => {
  const hotel = await prisma.hotel.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
      bookings:true,
      rooms:true
    },
  });

  if (!hotel) {
    // throw new Error();
    notFound();
  }

  return hotel;
};

export default async function HotelDetails({
  params,
}: {
  params: { slug: string };
}) {
  const hotel = await fetchHotelBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[80%] rounded p-3 shadow">
        <HotelNavBar slug={hotel.slug} />
        <Title name={hotel.name} />
        <Rating reviews={hotel.reviews} />
        <Description description={hotel.description} />
        <Images images={hotel.images} />
        <Rooms rooms={hotel.rooms} hotel_id={hotel.id} slug={hotel.slug} />
        <Reviews reviews={hotel.reviews} />
      </div>
    </>
  );
}