import { PrismaClient, Booking } from "@prisma/client";
import { notFound } from "next/navigation";
import RoomDetails from './components/RoomDetails'


const prisma = new PrismaClient();

interface RoomProps {
  id: number;
  name: string;
  description: string;
  price: string
  slug: string;
  hotel_id:number;
  bookings: Booking[];
  created_at: Date;
  updated_at: Date;
}

const fetchRoomlBySlug = async (slug: string): Promise<RoomProps> => {
  const room = await prisma.room.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      description: true,
      price: true,
      bookings: true,
      hotel_id:true,
      created_at:true,
      updated_at:true

    },
  });

  if (!room) {
    throw new Error();
    // notFound();
  }

  return room;
};

export default async function RoomBooking({
  params,
}: {
  params: { roomslug: string };
}) {
  const room = await fetchRoomlBySlug(params.roomslug);
  return ( 
    <>
      <RoomDetails room={room} />

      {/* <div className="bg-white w-[80%] rounded p-3 shadow">
        <h3 className="text-4xl">{room.name}</h3>
        <p className="text-xl">{room.description}</p>

        <p className="text-xl">Price: Rs {room.price} / <span>Night</span></p>
        <p className="text-xl font-bold">Bookings: {room.bookings.length}</p>
        <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div className="flex justify-end items-center">
          <p className="text-2xl mr-4"> Rs {room.price} / <span>Night</span></p>
          <button onClick={() => setOpenModal('dismissible')}>  className="text-white bg-blue-700 hover:bg-blue-800 flex justify-center items-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            
            Book Now
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div> */} 
    </>
  );
}
