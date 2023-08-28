import PreviewCard from "../../components/listingHouse/PreviewCard";
import PreviewCardsDescription from "../../components/listingHouse/PreviewCardsDescription";
import SuccessPupup from "../../components/popUp/houseListing/SuccessPupup";

const Reciept = () => {
  return (
    <div className=" flex flex-col gap-10 max-w-[900px] mx-auto my-6 min-h-[70vh]">
      <div>
        <h1 className=" text-[#222222] text-5xl font-medium">
          Review your listing
        </h1>
        <p className="text-lg text-[#717171] mt-5">
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
      <SuccessPupup />
    </div>
  );
};

export default Reciept;
