/* eslint-disable react/prop-types */
const StructureCard = ({
  style,
  name,
  Img,
  onClick,
  storedCardData,
  svgSize,
  ptagStyle,
}) => {
  return (
    <div
      className={`${style}
      ${
        storedCardData?.includes(name)
          ? " border-2 border-black bg-[#f7f7f7]"
          : "bg-white hover:bg-[#f7f7f7] hover:border-black border-[1.3px] border-[#dddddd] hover:border-[1.3px]"
      }
      `}
      onClick={() => {
        onClick(name);
      }}
    >
      <Img size={svgSize} />
      <p className={`${ptagStyle}`}>{name}</p>
    </div>
  );
};

export default StructureCard;
