import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about" className="about-section pt-10 bg-alpha px-20 h-[80vh] w-full flex justify-center">
      <div className="image flex-1 relative">
        <Image
          fill="true"
          src={"/about.svg"}
          alt="Cheesecake image for homepage"
        />
      </div>
      <div className="content flex-1 flex justify-center items-start items-left flex-col">
        <h1 className="text-5xl text-secondary leading-tight">
          We Love Cheesecake
        </h1>
        <h4 className="text-text"> Discover Our Cheesecake Story</h4>
        <p className="mt-6 text-text mb-8">
          At Cheesecake Love, quality is our cornerstone. Each <br /> cheesecake is
          crafted with the finest ingredients, <br />meticulous attention to detail,
          and a dash of creativity. <br /> <br /> We believe in delivering not just desserts
          but moments of <br />sheer indulgence.
        </p>
        <CustomButton label={"Read More"}/>
      </div>
    </div>
  );
}
