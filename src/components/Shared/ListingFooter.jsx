import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListingFooter = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [loading, setIsLoading] = useState(false);

  const url = window.location.pathname;
  const navigate = useNavigate();

  const handleNext = () => {
    if (url.includes("/become-a-host")) {
      navigate(`/become-a-host/${user?._id}/about-your-place`);
    }
  };

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
        <button
          className=" bg-[#222222] hove:bg-black text-white rounded-md px-4 py-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default ListingFooter;
