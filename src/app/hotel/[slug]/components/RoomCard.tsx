'use client'
import React, { useState } from "react";
import { Room } from "@prisma/client";

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import Link from "next/link";

export default function RoomCard({ room, hotel_id, slug }: { room: Room, hotel_id: number, slug:string }) {
    const [openModal, setOpenModal] = useState<string | undefined>();


    return (
        <div className="border-b pb-7 mb-7">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{room.name}</h5>
                <p className="font-light mt-1 text-sm">
                    {room.description}
                </p>
                <p className="mb-4 text-xl">Rs {room.price} / <span className="text-gray-500">Night</span></p>
                <Link href={`/hotel/${slug}/${room.slug}`}>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 flex justify-center items-center focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        {/* <Button color="blue" onClick={() => setOpenModal('dismissible')}> */}
                        Book Now
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </Link>

                {/* <BookingModal openModal={openModal} setOpenModal={setOpenModal} hotel_id={hotel_id} room_id={room.id} /> */}
            </div>
        </div>
    );
}