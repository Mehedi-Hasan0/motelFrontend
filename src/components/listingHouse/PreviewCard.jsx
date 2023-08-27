import { useSelector } from "react-redux";

import { AiFillStar } from "react-icons/ai";

const PreviewCard = () => {
  const currentHouseData = useSelector(
    (state) => state.house.currentListingHouse
  );
  return (
    <div className=" flex flex-col gap-3 rounded-2xl shadow-lg bg-white border-[#f1f1f1] border max-w-sm px-3 py-4">
      <div className=" relative ">
        <img
          src={currentHouseData?.photos[0]}
          alt="Beautiful house for hositng"
          className=" aspect-square object-cover rounded-xl"
        />
        <p className=" text-sm text-[#222222] px-3 py-1 rounded-md bg-white absolute top-3 left-3">
          Show preview
        </p>
      </div>
      <div className=" flex flex-row justify-between relative">
        <span className=" text-sm text-[#222222]">
          <p className=" font-medium">{currentHouseData?.title}</p>
          <span className=" flex flex-row gap-1">
            <p className=" font-bold">${currentHouseData?.basePrice}</p>
            <span>night</span>
          </span>
        </span>
        <span className=" flex flex-row items-center gap-1 text-sm text-[#222222] absolute top-0 right-0">
          New
          <AiFillStar size={16} />
        </span>
      </div>
    </div>
  );
};

export default PreviewCard;
