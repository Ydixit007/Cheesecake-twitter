import MenuCard from "@/components/MenuCard";

export default function MenuSection() {
  return (
    <div
      id="menu"
      className="menu-section px-20 min-h-[60vh] w-full pt-10 flex items-center flex-col pb-10"
    >
      <h1 className="text-6xl text-secondary leading-tight">Our Menu</h1>
      <div className="cards mt-6 flex gap-10 justify-center items-center flex-wrap">
        <MenuCard
          title={"Blueberry Cheesecake"}
          description={"Blueberry love, cheesecake delight!"}
          price={"9.00"}
          reviewCount={5}
          imgSrc={"/cake1.svg"}
        />
        <MenuCard
          title={"Biscoff Cheesecake"}
          description={"Biscoff adores cheesecake magic"}
          price={"11.00"}
          reviewCount={5}
          imgSrc={"/cake2.svg"}
        />
        <MenuCard
          title={"Chocolate Cheesecake"}
          description={"relish cheesecake magic!"}
          price={"10.00"}
          reviewCount={4}
          imgSrc={"/cake3.svg"}
        />
      </div>
    </div>
  );
}
