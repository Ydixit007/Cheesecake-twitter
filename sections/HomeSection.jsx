import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div id="home" className="home-section px-20 h-screen w-full pt-20 flex justify-center">
      <div className="content flex-1 flex justify-center flex-col gap-4">
        <h1 className="text-7xl text-secondary leading-tight">Bite The World of Cheesecake Wonders</h1>
        <p className="text-secondary leading-relaxed text-base">
          We always make our customer happy by providing <br /> as many choices as
          possible.
        </p>
        <div className="buttons flex gap-4 mt-4">
          <CustomButton label={"Get Started"} />
          <CustomButton type={"secondary"} label={"Watch Video"} />
        </div>
      </div>
      <div className="image flex-1 relative">
        <Image fill="true" src={"/home.svg"} alt="Cheesecake image for homepage"/>
      </div>
    </div>
  );
}
