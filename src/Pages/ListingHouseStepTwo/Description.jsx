import StructureCard from "../../components/listingHouse/StructureCard";
import { LiaShoePrintsSolid } from "react-icons/lia";

const Description = () => {
  return (
    <div className=" flex flex-col gap-10 max-w-screen-md mx-auto my-6">
      <div>
        <h1 className=" text-[#222222] text-[32px] font-medium">
          Next, let&apos;s describe your apartment
        </h1>
        <p className="text-lg text-[#717171]">
          Choose up to 2 highlights. We&apos;ll use these to get your
          description started.
        </p>
      </div>
      <div className=" flex flex-wrap gap-3">
        <StructureCard
          style={descriptionCardStyle}
          Img={LiaShoePrintsSolid}
          name={"Peaceful"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
        />
      </div>
    </div>
  );
};

// styles for STructuredCard component
const descriptionCardStyle =
  "flex flex-row items-center gap-1 px-6 py-3 rounded-full transition duration-300 cursor-pointer justify-center";

export default Description;
