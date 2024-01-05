import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <div className="navbar px-20 w-full fixed z-50  left-[50%] translate-x-[-50%] top-8 flex justify-between items-center">
      <div className="logo cursor-pointer">
        <Image height={84} width={84} src={"/logo.svg"} alt="Logo for cheesecake" />
      </div>
      <ul className="links flex gap-1 bg-primary overflow-hidden rounded-lg">
        <Link className="nav-link cursor-pointer duration-200 font-semibold rounded-lg px-6 py-2 text-white hover:bg-white hover:text-primary" href="#home">Home</Link>
        <Link className="nav-link cursor-pointer duration-200 font-semibold rounded-lg px-6 py-2 text-white hover:bg-white hover:text-primary" href="#about">About</Link>
        <Link className="nav-link cursor-pointer duration-200 font-semibold rounded-lg px-6 py-2 text-white hover:bg-white hover:text-primary" href="#menu">Menu</Link>
        <Link className="nav-link cursor-pointer duration-200 font-semibold rounded-lg px-6 py-2 text-white hover:bg-white hover:text-primary" href="#contact">Contact</Link>
      </ul>
      <CustomButton type={"secondary"} label={"Sign up"} />
    </div>
  );
}
