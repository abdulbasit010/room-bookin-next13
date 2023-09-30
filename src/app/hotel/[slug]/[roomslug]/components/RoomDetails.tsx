'use client'

import { useState } from "react";
import { Booking } from "@prisma/client";
import BookingModal from "./BookingModal";

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

const RoomDetails = ({room}: {room: RoomProps}) => {
    const [openModal, setOpenModal] = useState<string | undefined>();
  return (
    <>
      <div className="flex w-full md:h-56 items-center cursor-pointer bg-white border border-gray-200 rounded shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg"
          src={'https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11490/Temp_11490_1.jpg'}
          alt="" />
        <div className="flex flex-col w-full justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{room.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{room.description}</p>

          <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          <div className="flex justify-end items-center">
            <p className="text-2xl mr-4"> Rs {room.price} / <span>Night</span></p>
            <button onClick={() => setOpenModal('dismissible')} className="text-white bg-blue-700 hover:bg-blue-800 flex justify-center items-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

              Book Now
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>


      </div>

    <BookingModal openModal={openModal} setOpenModal={setOpenModal} hotel_id={room.hotel_id} room_id={room.id} />
    </>
  )
}

export default RoomDetails
