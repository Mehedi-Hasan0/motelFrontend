const ListingFooter = () => {
  return (
    <footer className=" sticky bottom-0 bg-white">
      {/* progressbar */}
      <div>
        <progress
          className="progress w-full shadow-sm"
          value={0}
          max="100"
        ></progress>
      </div>
      {/* button */}
      <div className=" flex justify-end py-4 px-20 top-0 z-10 bg-white max-w-screen-xl xl:px-20 xl:mx-auto">
        <button className=" bg-[#222222] hove:bg-black text-white rounded-md px-4 py-2">
          Next
        </button>
      </div>
    </footer>
  );
};

export default ListingFooter;
