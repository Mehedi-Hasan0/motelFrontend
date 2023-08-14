/* eslint-disable react/prop-types */

const OverviewCard = ({ img, head, desc, num }) => {
  return (
    <div className=" flex flex-row justify-between gap-5">
      <div className=" flex flex-row">
        <h1 className=" text-[#222222] font-medium text-2xl pr-5">{num}</h1>
        <div className=" flex flex-col gap-2 min-w-[350px]">
          <h1 className=" text-[#222222] font-medium text-2xl">{head}</h1>
          <p className=" text-[#717171] text-lg">{desc}</p>
        </div>
      </div>
      <img src={img} alt="preview" className=" aspect-square w-[120px]" />
    </div>
  );
};

export default OverviewCard;
