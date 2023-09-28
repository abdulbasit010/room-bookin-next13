import Link from "next/link";

export default function HotelNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/hotel/${slug}`} className="mr-7">
        Overview
      </Link>
    </nav>
  );
}