import { Room } from "@prisma/client";
import RoomCard from "./RoomCard";

export default function Rooms({ rooms, hotel_id, slug }: { rooms: Room[], hotel_id: number, slug:string }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
       Rooms Available
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard room={room} hotel_id={hotel_id} key={room.id} slug={slug} />
        ))}
      </div>
    </div>
  );
}