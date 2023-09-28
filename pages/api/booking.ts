// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  if (req.method === "POST") {

    const { name, email, check_in, check_out, hotel_id, room_id } = req.body;
    const reservation = await prisma.booking.create({
      data: {
        name,
        email,
        check_in: new Date(check_in),
        check_out: new Date(check_out),
        hotel_id,
        room_id
      },
    });

    res.status(201).json({ reservation, msg: "Booking Done" });
  }

  res.status(200).json({ reservation: "Booking Done" });
}
