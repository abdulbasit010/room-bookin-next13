// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PRICING, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	//   await prisma.table.deleteMany();
	await prisma.review.deleteMany();
	await prisma.room.deleteMany();
	await prisma.hotel.deleteMany();
	await prisma.location.deleteMany();
	await prisma.user.deleteMany();
	await prisma.booking.deleteMany();

	await prisma.location.createMany({
		data: [
			{ name: "faisalabad" },
			{ name: "lahore" },
			{ name: "islamabad" },
			{ name: "karachi" },
		],
	});

	// await prisma.cuisine.createMany({
	// 	data: [{ name: "indian" }, { name: "italian" }, { name: "mexican" }],
	// });

	const locations = await prisma.location.findMany();
	// const cuisines = await prisma.cuisine.findMany();

	// const indianCuisineId =
	// 	cuisines.find((cuisine) => cuisine.name === "indian")?.id || 1;
	// const mexicanCuisineId =
	// 	cuisines.find((cuisine) => cuisine.name === "mexican")?.id || 1;
	// const italianCuisineId =
	// 	cuisines.find((cuisine) => cuisine.name === "italian")?.id || 1;

	const faisalabadLocationId =
		locations.find((location) => location.name === "faisalabad")?.id || 1;
	const lahoreLocationId =
		locations.find((location) => location.name === "lahore")?.id || 1;
	const islamabadLocationId =
		locations.find((location) => location.name === "islamabad")?.id || 1;
	const karachiLocationId =
		locations.find((location) => location.name === "karachi")?.id || 1;

	await prisma.hotel.createMany({
		data: [
			// Faisalabad //
			{
				name: "New Madina Hotel",
				address: "Satayana Road, Usmanabad Block B, Peoples Colony",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13399/Temp_13399_2.jpeg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13399/Temp_13399_2.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13399/Temp_13399_3.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13399/Temp_13399_4.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13399/Temp_13399_5.jpeg",
				],
				slug: "new-madina-hotel-faisalabad",
				location_id: faisalabadLocationId,
			},
			{
				name: "Fine Star Hotel",
				address: "1X1? Block X Madina Town, Faisalabad",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11729/Temp_11729_1.jpg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11729/Temp_11729_2.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11729/Temp_11729_3.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11729/Temp_11729_4.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11729/Temp_11729_6.jpeg",
				],
				slug: "fine-star-hotel-faisalabad",
				location_id: faisalabadLocationId,
			},
			{
				name: "Grand Regent Hotel and Suites Faisalabad",
				address: "Regent Mall, Chen One Road,",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/12958/Temp_12958_10.jpeg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/12958/Temp_12958_9.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/12958/Temp_12958_10.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/12958/Temp_12958_11.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/12958/Temp_12958_15.jpeg",
				],
				slug: "grand-regent-hotel-faisalabad",
				location_id: faisalabadLocationId,
			},
			{
				name: "Silk Hotel",
				address: "Susan Road, Madina Town Faisalabad",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11726/Temp_11726_1.jpeg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11726/Temp_11726_2.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11726/Temp_11726_4.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11726/Temp_11726_6.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11726/Temp_11726_5.jpeg",
				],
				slug: "silk-hotel-faisalabad",
				location_id: faisalabadLocationId,
			},
			{
				name: "Grace Hotel Faisalabad",
				address: "Circular Rd, Chiniot Bazar, Qadimi Shehar",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11858/Temp_11858_1.jpg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11858/Temp_11858_2.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11858/Temp_11858_3.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11858/Temp_11858_4.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11858/Temp_11858_1.jpg",
				],
				slug: "grace-hotel-faisalabad",
				location_id: faisalabadLocationId,
			},

			// Lahore //
			{
				name: "New Taj Palace Hotel",
				address: "Near Bilal Travel Terminal Band Road",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10444/Temp_10444_1.jpeg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10444/Temp_10444_1.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10444/Temp_10444_2.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10444/Temp_10444_3.jpeg",
				],
				slug: "new-taj-palace-hotel-lahore",
				location_id: lahoreLocationId,
			},
			{
				name: "Marhaba Hotel",
				address: "Band Road Near Rehbar Terminal",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10447/Temp_10447_2.jpg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10447/Temp_10447_4.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10447/Temp_10447_5.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10447/Temp_10447_6.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10447/Temp_10447_7.jpeg",
				],
				slug: "marhaba-hotel-lahore",
				location_id: lahoreLocationId,
			},

			// Islamabad //
			{
				name: "Mehran Hotel",
				address: "IJP Road Near Metro Stop Rawalpindi",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10363/Temp_10363_10.jpg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10363/Temp_10363_14.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10363/Temp_10363_15.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10363/Temp_10363_17.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/10363/Temp_10363_18.jpeg",
				],
				slug: "mehran-hotel-islamabad",
				location_id: islamabadLocationId,
			},
			{
				name: "Dastak Hotels",
				address: "Plot A, Street-1, H-13, Islamabad",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13466/Temp_13466_2.jpeg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13466/Temp_13466_4.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13466/Temp_13466_5.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13466/Temp_13466_6.jpeg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/13466/Temp_13466_1.jpeg",
				],
				slug: "dastak-hotel-islamabad",
				location_id: islamabadLocationId,
			},

			// Karachi //
			{
				name: "GOHO Rooms",
				address: "4th Floor, PLOT 11-C Badar Commercial Street 2, Phase V Badar Commercial Area Defence V Defence Hous",
				image:
					"https://bookme.pk/images/hotels/gallery/166572374199617.jpg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://bookme.pk/images/hotels/gallery/166572374984871.jpg",
					"https://bookme.pk/images/hotels/gallery/166572375027292.jpg",
					"https://bookme.pk/images/hotels/gallery/166572823851714.jpg",
					"https://bookme.pk/images/hotels/gallery/166572823977265.jpg",
				],
				slug: "goho-rooms-karachi",
				location_id: karachiLocationId,
			},
			{
				name: "Second Home Hotel",
				address: "9/22 mustafa arcade, main Liaquat ali khan road model colony",
				image:
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11490/Temp_11490_1.jpg",
				pricing: PRICING.REGULAR,
				description: '',
				policy:
					"Non-refundable. Full amount will be charged in case of cancellation.",
				images: [
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11490/Temp_11490_2.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11490/Temp_11490_3.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11490/Temp_11490_5.jpg",
					"https://s3-eu-west-1.amazonaws.com/aws.roomph/Image/AccomodationImages/11490/Temp_11490_9.jpg",
				],
				slug: "second-home-hotel-karachi",
				location_id: karachiLocationId,
			},

		],
	});

	const hotels = await prisma.hotel.findMany();

	const newMadinaId =
		hotels.find((hotel) => hotel.name === "New Madina Hotel")
			?.id || 1;
	const fineStarHotelId =
		hotels.find((hotel) => hotel.name === "Fine Star Hotel")
			?.id || 1;
	const grandRegentId =
		hotels.find((hotel) => hotel.name === "Grand Regent Hotel and Suites Faisalabad")
			?.id || 1;
	const silkHotelId =
		hotels.find((hotel) => hotel.name === "Silk Hotel")
			?.id || 1;
	const graceHotelId =
		hotels.find((hotel) => hotel.name === "Grace Hotel Faisalabad")
			?.id || 1;
	const tajPalaceId =
		hotels.find((hotel) => hotel.name === "New Taj Palace Hotel")
			?.id || 1;
	const marhabaHotelId =
		hotels.find((hotel) => hotel.name === "Marhaba Hotel")?.id || 1;
	const mehranHotelId =
		hotels.find((hotel) => hotel.name === "Mehran Hotel")?.id || 1;
	const dastakHotelId =
		hotels.find((hotel) => hotel.name === "Dastak Hotels")
			?.id || 1;
	const gohoRoomsId =
		hotels.find((hotel) => hotel.name === "GOHO Rooms")?.id ||
		1;
	const secondHomeHotelId =
		hotels.find((hotel) => hotel.name === "Second Home Hotel")?.id || 1;

	await prisma.room.createMany({
		data: [
			{
				name: "New Madiana Hotel Room 1",
				description:
					"New madina hotel vip room",
				price: "5000",
				hotel_id: newMadinaId,
				slug: 'new-madina-room1',
			},
			{
				name: "New Madiana Hotel Room 2",
				description: "New Madiana Hotel main room",
				price: "4500",
				hotel_id: newMadinaId,
				slug: 'new-madina-room2',
			},
			{
				name: "New Madiana Hotel Room 3",
				description:
					"New Madiana Hotel master room",
				price: "4000",
				hotel_id: newMadinaId,
				slug: 'new-madina-room3',
			},
			{
				name: "New Madiana Hotel Room 4",
				description:
					"New Madiana Hotel family room",
				price: "5000",
				hotel_id: newMadinaId,
				slug: 'new-madina-room4',
			},
			{
				name: "New Madiana Hotel room 5",
				description:
					"New Madiana Hotel normal room",
				price: "3000",
				hotel_id: newMadinaId,
				slug: 'new-madina-room5',
			},

			{
				name: "Fine star hotel Room 1",
				description:
					"Fine star hotel VIP room",
				price: "6500",
				hotel_id: fineStarHotelId,
				slug: 'fine-star-room1',
			},
			{
				name: "Fine star hotel room 2",
				description:
					"Fine star hotel standard room",
				price: "6000",
				hotel_id: fineStarHotelId,
				slug: 'fine-star-room2',
			},
			{
				name: "Fine star hotel standard room 3",
				description:
					"Fine star hotel standard room2",
				price: "5500",
				hotel_id: fineStarHotelId,
				slug: 'fine-star-room3',
			},
			{
				name: "Fine star hotel room 4",
				description:
					"Fine star hotel minimalist room",
				price: "5000",
				hotel_id: fineStarHotelId,
				slug: 'fine-star-room4',
			},
			{
				name: "Fine star hotel connecting room 5",
				description:
					"Fine star hotel connecting room",
				price: "4500",
				hotel_id: fineStarHotelId,
				slug: 'fine-star-room5',
			},


			{
				name: "Grand Regent room 1",
				description:
					"Grand Regent VIP room",
				price: "6000",
				hotel_id: grandRegentId,
				slug: 'grand-regent-room1',
			},
			{
				name: "Grand Regent room 2",
				description: "Grand Regent standard room",
				price: "5500",
				hotel_id: grandRegentId,
				slug: 'grand-regent-room2',
			},
			{
				name: "Grand Regent room 3",
				description: "Grand Regent minimalist room",
				price: "5000",
				hotel_id: grandRegentId,
				slug: 'grand-regent-room3',
			},
			{
				name: "Grand Regent room 4",
				description: "Grand Regent connecting room",
				price: "4500",
				hotel_id: grandRegentId,
				slug: 'grand-regent-room4',
			},
			{
				name: "Grand Regent room 5",
				description:
					"Grand Regent normal room",
				price: "4000",
				hotel_id: grandRegentId,
				slug: 'grand-regent-room5',
			},
			{
				name: "Silk Hotel Room 1",
				description:
					"Silk Hotel VIP Room",
				price: "6500",
				hotel_id: silkHotelId,
				slug: 'silk-hotel-room1',
			},
			{
				name: "Silk Hotel Room 2",
				description:
					"Silk Hotel standard Room",
				price: "6000",
				hotel_id: silkHotelId,
				slug: 'silk-hotel-room2',
			},
			{
				name: "Silk Hotel Room 3",
				description:
					"Silk Hotel connecting Room",
				price: "5500",
				hotel_id: silkHotelId,
				slug: 'silk-hotel-room3',
			},
			{
				name: "Silk Hotel Room 4",
				description: "Silk Hotel normal Room",
				price: "5000",
				hotel_id: silkHotelId,
				slug: 'silk-hotel-room4',
			},

			{
				name: "Grace Hotel Room 1",
				description: "Grace hotel room 1",
				price: "6500",
				hotel_id: graceHotelId,
				slug: 'grace-hotel-room1',
			},
			{
				name: "Grace Hotel Room 2",
				description: "Grace hotel room 2",
				price: "6000",
				hotel_id: graceHotelId,
				slug: 'grace-hotel-room2',
			},
			{
				name: "Grace Hotel Room 3",
				description: "Grace hotel room 3",
				price: "5500",
				hotel_id: graceHotelId,
				slug: 'grace-hotel-room3',
			},
			{
				name: "Grace Hotel Room 4",
				description: "Grace hotel room 4",
				price: "5000",
				hotel_id: graceHotelId,
				slug: 'grace-hotel-room4',
			},
			{
				name: "Grace Hotel Room 5",
				description: "Grace hotel room 5",
				price: "4500",
				hotel_id: graceHotelId,
				slug: 'grace-hotel-room5',
			},
			{
				name: "Taj Palace Hote Room 1",
				description: "Taj Palace hotel room 1",
				price: "6000",
				hotel_id: tajPalaceId,
				slug: 'taj-palace-room1',
			},
			{
				name: "Taj Palace Hote Room 2",
				description: "Taj Palace hotel room 2",
				price: "5500",
				hotel_id: tajPalaceId,
				slug: 'taj-palace-room2',
			},
			{
				name: "Taj Palace Hote Room 3",
				description: "Taj Palace hotel room 3",
				price: "5000",
				hotel_id: tajPalaceId,
				slug: 'taj-palace-room3',
			},
			{
				name: "Taj Palace Hote Room 4",
				description: "Taj Palace hotel room 4",
				price: "4500",
				hotel_id: tajPalaceId,
				slug: 'taj-palace-room4',
			},
			{
				name: "Taj Palace Hote Room 5",
				description: "Taj Palace hotel room 5",
				price: "4000",
				hotel_id: tajPalaceId,
				slug: 'taj-palace-room5',
			},
			{
				name: "Marhaba Hotel Room 1",
				description: "Marhaba Hotel Room 1",
				price: "6500",
				hotel_id: marhabaHotelId,
				slug: 'marhaba-hotel-room1',
			},
			{
				name: "Marhaba Hotel Room 2",
				description: "Marhaba Hotel Room 2",
				price: "6000",
				hotel_id: marhabaHotelId,
				slug: 'marhaba-hotel-room2',
			},
			{
				name: "Marhaba Hotel Room 3",
				description: "Marhaba Hotel Room 3",
				price: "5500",
				hotel_id: marhabaHotelId,
				slug: 'marhaba-hotel-room3',
			},
			{
				name: "Marhaba Hotel Room 4",
				description: "Marhaba Hotel Room 4",
				price: "5000",
				hotel_id: marhabaHotelId,
				slug: 'marhaba-hotel-room4',
			},
			{
				name: "Marhaba Hotel Room 5",
				description: "Marhaba Hotel Room 5",
				price: "4500",
				hotel_id: marhabaHotelId,
				slug: 'marhaba-hotel-room5',
			},
			{
				name: "Marhaba Hotel Room 6",
				description: "Marhaba Hotel Room 6",
				price: "4000",
				hotel_id: marhabaHotelId,
				slug: 'marhaba-hotel-room6',
			},
			{
				name: "Mehran Hotel Room 1",
				description: "Mehran Hotel Room 1",
				price: "6000",
				hotel_id: mehranHotelId,
				slug: 'mehran-hotel-room1',
			},
			{
				name: "Mehran Hotel Room 2",
				description: "Mehran Hotel Room 2",
				price: "5500",
				hotel_id: mehranHotelId,
				slug: 'mehran-hotel-room2',
			},
			{
				name: "Mehran Hotel Room 3",
				description: "Mehran Hotel Room 3",
				price: "5000",
				hotel_id: mehranHotelId,
				slug: 'mehran-hotel-room3',
			},
			{

				name: "Mehran Hotel Room 4",
				description: "Mehran Hotel Room 4",
				price: "4500",
				slug: 'mehran-hotel-room4',
				hotel_id: mehranHotelId,
			},
			{

				name: "Mehran Hotel Room 5",
				description: "Mehran Hotel Room 5",
				price: "4000",
				hotel_id: mehranHotelId,
				slug: 'mehran-hotel-room5',
			},
			{

				name: "Mehran Hotel Room 6",
				description: "Mehran Hotel Room 6",
				price: "3500",
				hotel_id: mehranHotelId,
				slug: 'mehran-hotel-room6',
			},
			{
				name: "Dastak Hotel Room 1",
				description:
					"Dastan Hotel Room 1",
				price: "6000",
				hotel_id: dastakHotelId,
				slug: 'dastak-hotel-room1',
			},
			{
				name: "Dastak Hotel Room 2",
				description:
					"Dastak Hotel Room 2",
				price: "5000",
				hotel_id: dastakHotelId,
				slug: 'dastak-hotel-room2',
			},
			{
				name: "GOHO Rooms Room 1",
				description: "GOHO Rooms Room 1",
				price: "6000",
				hotel_id: gohoRoomsId,
				slug: 'goho-rooms-room1',
			},
			{
				name: "GOHO Rooms Room 2",
				description: "GOHO Rooms Room 2",
				price: "5500",
				hotel_id: gohoRoomsId,
				slug: 'goho-rooms-room2',
			},
			{
				name: "Second Home Hotel Room 1",
				description: "Second Home Hotel Room 1",
				price: "7000",
				hotel_id: secondHomeHotelId,
				slug: 'second-home-hotel-room1',
			},
			{
				name: "Second Home Hotel Room 2",
				description:"Second Home Hotel Room 2",
				price: "6500",
				hotel_id: secondHomeHotelId,
				slug: 'second-home-hotel-room2',
			},
			{
				name: "Second Home Hotel Room 3",
				description:"Second Home Hotel Room 3",
				price: "6000",
				hotel_id: secondHomeHotelId,
				slug: 'second-home-hotel-room3',
			},
			{
				name: "Second Home Hotel Room 4",
				description:"Second Home Hotel Room 4",
				price: "5500",
				hotel_id: secondHomeHotelId,
				slug: 'second-home-hotel-room4',
			},
			{
				name: "Second Home Hotel Room 5",
				description: "Second Home Hotel Room 5",
				price:"5000",
				hotel_id: secondHomeHotelId,
				slug: 'second-home-hotel-room5',
			},
			{
				name: "Second Home Hotel Room 6",
				description:"Second Home Hotel Room 6",
				price: "4500",
				hotel_id: secondHomeHotelId,
				slug: 'second-home-hotel-room6',
			},
		],
	});

	const userAli = await prisma.user.create({
		data: {
			name: "Ali",

			email: "ali@hotmail.com",
			city: "faisalabad",
			password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
			phone: "1112223333",
		},
	});

	const userHassan = await prisma.user.create({
		data: {
			name: "Hassan",

			email: "hassan@hotmail.com",
			city: "lahore",
			password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
			phone: "1112223333",
		},
	});

	const userKashif = await prisma.user.create({
		data: {
			name: "Kashif",

			email: "kashif@hotmail.com",
			city: "islamabad",
			password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
			phone: "1112223333",
		},
	});

	const userJamil = await prisma.user.create({
		data: {
			name: "Jamil",
			email: "jamil@hotmail.com",
			city: "karachi",
			password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
			phone: "1112223333",
		},
	});


	await prisma.review.createMany({
		data: [
			{
				name: "Ali",

				text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
				rating: 5,
				hotel_id: newMadinaId,
				user_id: userAli.id,
			},
			{
				name: "Ali",

				text: "Extremely disappointing in our experience.",
				rating: 2,
				hotel_id: secondHomeHotelId,
				user_id: userAli.id,
			},
			{
				name: "Ali",

				text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
				rating: 5,
				hotel_id: dastakHotelId,
				user_id: userAli.id,
			},
			{
				name: "Ali",

				text: "Hotel was loud and crowded. Food is not worth the price.",
				rating: 3,
				hotel_id: gohoRoomsId,
				user_id: userAli.id,
			},
			{
				name: "Hassan",

				text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
				rating: 4,
				hotel_id: newMadinaId,
				user_id: userHassan.id,
			},
			{
				name: "Hassan",

				text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
				rating: 3,
				hotel_id: tajPalaceId,
				user_id: userHassan.id,
			},
			{
				name: "Hassan",

				text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
				rating: 3,
				hotel_id: graceHotelId,
				user_id: userHassan.id,
			},
			{
				name: "Hassan",

				text: "Wonderful food and service.",
				rating: 5,
				hotel_id: grandRegentId,
				user_id: userHassan.id,
			},
			{
				name: "Kashif",

				text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
				rating: 5,
				hotel_id: fineStarHotelId,
				user_id: userKashif.id,
			},
			{
				name: "Kashif",

				text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
				rating: 4,
				hotel_id: silkHotelId,
				user_id: userKashif.id,
			},
			{
				name: "Kashif",

				text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
				rating: 4,
				hotel_id: tajPalaceId,
				user_id: userKashif.id,
			},
			{
				name: "Kashif",

				text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
				rating: 5,
				hotel_id: mehranHotelId,
				user_id: userKashif.id,
			},
			{
				name: "Kashif",

				text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
				rating: 4,
				hotel_id: gohoRoomsId,
				user_id: userKashif.id,
			},
			{
				name: "Jamil",

				text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
				rating: 5,
				hotel_id: grandRegentId,
				user_id: userJamil.id,
			},
			{
				name: "Jamil",

				text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
				rating: 3,
				hotel_id: secondHomeHotelId,
				user_id: userJamil.id,
			},
			{
				name: "Jamil",

				text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
				rating: 4,
				hotel_id: gohoRoomsId,
				user_id: userJamil.id,
			},
			{
				name: "Jamil",

				text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
				rating: 4,
				hotel_id: marhabaHotelId,
				user_id: userJamil.id,
			},
		],
	});

	res.status(200).json({ name: "hello" });
}
