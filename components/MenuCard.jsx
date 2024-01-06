import Image from "next/image";
import ReviewStars from "./ReviewStars";

export default function MenuCard({ imgSrc, title, description, price, reviewCount }) {
  return (
    <div className="menu-card bg-alpha flex flex-col w-[256px] h-[256px] rounded-3xl overflow-hidden border-black border-solid border-4">
      <div className="image-container relative h-[60%]">
        <Image fill="true" src={imgSrc} alt="menu-item" />
      </div>
      <div className="content flex flex-col px-4 py-2">
        <h1 className="text-xl font-[700] text-dark">{title}</h1>
        <h4 className="text-xs text-greyy">{description}</h4>
        <div className="flex items-center mt-3 justify-between">
          <h4 className="text-lg font-bold text-primary">
            <span className="text-lg font-bold text-green-500">$</span>
            {price}
          </h4>
          <div className="stars">
            <ReviewStars reviewCount={reviewCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
