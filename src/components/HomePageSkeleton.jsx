import SkeletonLoading from "./Home/SkeletonLoading";

const HomePageSkeleton = () => {
  // Determine the number of cards to render based on device size
  const cardCount = window.innerWidth >= 1536 ? 30 : 20;

  // Create an array of card elements
  const cards = Array.from({ length: cardCount }, (_, index) => (
    <SkeletonLoading key={index} />
  ));
  return (
    <>
      <div className=" flex items-center gap-4">
        <div className=" bg-[#dddddd] rounded-full w-10"></div>
      </div>
      <div className=" py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto gap-5 max-w-screen-2xl xl:px-10">
        {/* <SkeletonLoading /> */}
        {cards}
      </div>
    </>
  );
};

export default HomePageSkeleton;
