/* eslint-disable react/prop-types */
const SetupCard = ({ heading, subHeading }) => {
  return (
    <div className=" flex flex-col gap-2">
      <h3 className=" text-[#222222] text-lg font-medium">{heading}</h3>
      <p className="text-[#717171] text-base">{subHeading}</p>
    </div>
  );
};

export default SetupCard;
