import { categoryApi } from "./categoryApi";
import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Category = () => {
  // custom arrow for carousel

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <MdKeyboardArrowLeft size={18} />
      ) : (
        <MdKeyboardArrowRight size={18} />
      );
    return (
      <button
        className=" p-1 rounded-full border-neutral-400 border bg-white flex items-center max-h-[32px] my-auto hover:shadow-lg"
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </button>
    );
  };

  return (
    <div className=" flex flex-row gap-2">
      <Carousel
        itemsToShow={8}
        pagination={false}
        disableArrowsOnEnd={true}
        itemsToScroll={4}
        enableSwipe={true}
        enableMouseSwipe={true}
        renderArrow={myArrow}
      >
        {categoryApi.map((cat) => {
          return (
            <div
              key={cat._id}
              className=" flex flex-col-reverse items-center gap-1"
            >
              <p className=" text-xs">{cat?.name}</p>
              <cat.svg size={24} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Category;
