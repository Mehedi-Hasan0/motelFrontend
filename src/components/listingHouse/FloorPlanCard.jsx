/* eslint-disable react/prop-types */
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const FloorPlanCard = ({ name, number, setNumber }) => {
  return (
    <div className=" flex flex-row justify-between items-center gap-10 text-[#222222]">
      <p className=" text-lg ">{name}</p>
      <div className=" flex flex-row gap-2 items-center text-base">
        <div
          className={` p-2 rounded-full border border-[#dddddd] hover:border-[#717171] transition duration-200
          ${
            name === "Beds" && number < 2
              ? " opacity-40 cursor-not-allowed"
              : "cursor-pointer"
          }
          `}
          onClick={() => {
            if (number === 0 || (name === "Beds" && number < 2)) return;
            if (number > 0) {
              setNumber((prev) => prev - 1);
            }
          }}
        >
          <BiMinus size={20} />
        </div>
        <p className=" w-[20px] text-center">{number}</p>
        <div
          className=" p-2 rounded-full border border-[#dddddd] hover:border-[#717171] cursor-pointer transition duration-200"
          onClick={() => {
            setNumber((prev) => prev + 1);
          }}
        >
          <BiPlus size={20} />
        </div>
      </div>
    </div>
  );
};

export default FloorPlanCard;
