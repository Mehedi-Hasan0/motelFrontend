/* eslint-disable react/prop-types */

const PlaceTypeCard = ({ head, desc, Img, onClick, storedCardData }) => {
  return (
    <div
      onClick={() => {
        onClick(head);
      }}
      className={`flex flex-row px-8 justify-between items-center py-4 bg-white hover:bg-[#f7f7f7] hover:border-black hover:border-2 rounded-2xl cursor-pointer h-[120px] transition duration-300 
      ${
        storedCardData === head
          ? "border-2 border-black bg-[#f7f7f7]"
          : "border-[1.3px] border-[#dddddd] bg-white hover:bg-[#f7f7f7] hover:border-black hover:border-2"
      }`}
    >
      <div className=" flex flex-col gap-1">
        <h4 className=" text-[#222222] text-lg font-medium">{head}</h4>
        <p className=" text-sm text-[#717171]">{desc}</p>
      </div>
      <Img size={40} />
    </div>
  );
};

export default PlaceTypeCard;
