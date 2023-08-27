import PreviewCard from "../../components/listingHouse/PreviewCard";
import PreviewCardsDescription from "../../components/listingHouse/PreviewCardsDescription";

const Reciept = () => {
  return (
    <div className=" flex flex-col gap-14 max-w-screen-md mx-auto my-6 min-h-[70vh]">
      <div>
        <h1 className=" text-[#222222] text-[32px] font-medium">
          Review your listing
        </h1>
        <p className="text-lg text-[#717171]">
          Here&apos;s what we&apos;ll show to guests. Make sure everything looks
          good.
        </p>
      </div>
      <div className="grid grid-cols-2 items-center gap-5">
        {/* preview Card */}
        <PreviewCard />
        {/* card details */}
        <PreviewCardsDescription />
      </div>
    </div>
  );
};

export default Reciept;
