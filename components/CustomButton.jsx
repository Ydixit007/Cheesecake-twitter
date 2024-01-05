import Link from "next/link";

export default function CustomButton({ label, type }) {
  if (type == "secondary") {
    return (
      <Link href="#contact">
        <div className="button px-6 py-3 duration-200 border-solid border-2 rounded-full font-medium cursor-pointer border-primaryDark hover:bg-alpha hover:text-primaryDark">
          {label}
        </div>
      </Link>
    );
  } else {
    return (
      <Link href="#contact">
        <div className="button px-6 py-3 duration-200 border-solid border-2 rounded-full font-medium cursor-pointer border-primaryDark bg-primaryDark text-white hover:bg-primary hover:border-primary hover:text-white shadow-lg">
          {label}
        </div>
      </Link>
    );
  }
}
