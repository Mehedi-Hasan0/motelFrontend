/* eslint-disable react/prop-types */
const SetupCard = ({ heading, subHeading, img }) => {
  return (
    <div
      className={` flex flex-col gap-2 ${
        img ? " justify-between items-center" : ""
      }`}
    >
      <img
        src={img}
        alt="apartment"
        className={` max-w-xs rounded-lg ${img ? "block" : "hidden"}`}
      />
      <div className={`${img ? "" : "flex flex-col gap-2"}`}>
        <h3
          className={` text-[#222222]  font-medium ${
            img ? " text-center text-xs" : " text-lg"
          }`}
        >
          {heading}
        </h3>
        <p
          className={`text-[#717171] ${
            img ? "text-center text-xs" : "text-base"
          }`}
        >
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default SetupCard;
