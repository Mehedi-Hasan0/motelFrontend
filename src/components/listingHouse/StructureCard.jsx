/* eslint-disable react/prop-types */
const StructureCard = ({ name, Img, onClick, storedCardData }) => {
  return (
    <div
      className={` flex flex-col gap-1 px-6 rounded-xl transition duration-300 h-[120px] w-[220px] cursor-pointer justify-center
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
      <Img size={40} />
      <p className=" text-[#222222] text-lg font-medium">{name}</p>
    </div>
  );
};

export default StructureCard;
