/* eslint-disable react/prop-types */
const StructureCard = ({
  style,
  name,
  Img,
  onClick,
  storedCardData,
  svgSize,
}) => {
  return (
    <div
      className={`${style}
      ${
        storedCardData?.includes(name)
          ? " border-2 border-black bg-[#f7f7f7]"
          : "bg-white hover:bg-[#f7f7f7] hover:border-black border-[1.3px] border-[#dddddd] hover:border-2"
      }
      `}
      onClick={() => {
        onClick(name);
      }}
    >
      <Img size={svgSize} />
      <p className=" text-[#222222] text-lg font-medium">{name}</p>
    </div>
  );
};

export default StructureCard;
