import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-16 flex lg:w-full flex-col items-center justify-center gap-4 py-10 text-sm text-bluegray">
      <div>
        <Image
          src={"/assets/navbar.png"}
          alt="Afterhours CS2 logo"
          height={100}
          width={100}
          className="w-28 object-cover"
        />
      </div>

      <div className="flex flex-row gap-10 text-lg md:text-xl">
        <Link href={"https://x.com/AfterHoursCS2"} target="_blank">
          <FaXTwitter className="" />
        </Link>
        <Link href={"https://www.youtube.com/@AfterHoursCS2"} target="_blank">
          <FaYoutube />
        </Link>
        <Link href={"https://www.instagram.com/afterhourscs2"} target="_blank">
          <AiFillInstagram />
        </Link>
        <Link href="mailto:treatphd@afterhourscs2.com">
          <MdEmail />
        </Link>
      </div>
      <div className="flex space-x-3 md:space-x-5 text-[12px] md:text-[15px]">
        <Link href={"/"} className="hover:underline">
          Home
        </Link>
        <Link href={"/news"} className="hover:underline">
          News
        </Link>
        <Link href={"/tourney"} className="hover:underline">
          Tourney
        </Link>
        <Link href={"/faceit"} className="hover:underline">
          Hub
        </Link>
        <Link href={"/prizes"} className="hover:underline">
          Prizes
        </Link>
        <Link href={"/staff"} className="hover:underline">
          Staff
        </Link>
      </div>
      <div className="text-center text-[10px] md:text-[11px]">
        Copyright &copy; {new Date().getFullYear()} Afterhours, Designed by{" "}
        <Link
          href={"https://pantheras.ca"}
          target="_blank"
          className="hover:text-accent"
        >
          Pantheras Digital
        </Link>
      </div>
    </footer>
  );
}
