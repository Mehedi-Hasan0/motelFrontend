import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListingFooter = () => {
  const user = useSelector((state) => state.user.userDetails);
  const createHouseData = useSelector((state) => state.house?.newHouse);
  const [loading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const url = window.location.pathname;
  const navigate = useNavigate();

  console.log(createHouseData);
  /**
   * The function `handleNext` navigates to different URLs based on the current URL.
   */
  const handleNext = () => {
    if (url?.includes("/become-a-host")) {
      navigate(`/become-a-host/${user?._id}/about-your-place`);
    }
    if (url?.includes("/about-your-place")) {
      navigate(`/become-a-host/${user?._id}/structure`);
    }
    if (url?.includes("/structure")) {
      navigate(`/become-a-host/${user?._id}/privacy-type`);
    }
    if (url?.includes("/privacy-type")) {
      navigate(`/become-a-host/${user?._id}/location`);
    }
    if (url?.includes("/location")) {
      navigate(`/become-a-host/${user?._id}/floor-plan`);
    }
    if (url?.includes("/floor-plan")) {
      navigate(`/become-a-host/${user?._id}/stand-out`);
    }
    if (url?.includes("/stand-out")) {
      navigate(`/become-a-host/${user?._id}/amenities`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* The `useEffect` hook in the code snippet is used to update the `progress` state based on the current
URL. */
  useEffect(() => {
    if (url?.includes("/about-your-place")) {
      setProgress(0);
    }
    if (url?.includes("/structure")) {
      setProgress(10);
    }
    if (url?.includes("/privacy-type")) {
      setProgress(20);
    }
    if (url?.includes("/location")) {
      setProgress(30);
    }
    if (url?.includes("/floor-plan")) {
      setProgress(40);
    }
    if (url?.includes("/stand-out")) {
      setProgress(40);
    }
    if (url?.includes("/amenities")) {
      setProgress(50);
    }
  }, [progress, url]);

  return (
    <footer className=" sticky bottom-0 bg-white">
      {/* progressbar */}
      <div>
        <progress
          className="progress w-full shadow-sm transition-all duration-700"
          value={progress}
          max="100"
        ></progress>
      </div>
      {/* button */}
      <div className=" flex justify-between py-4 px-20 top-0 z-10 bg-white max-w-screen-xl xl:px-20 xl:mx-auto">
        <button
          className=" hover:bg-[#f1f1f1] text-black rounded-md px-4 py-2 underline"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <button
          className=" text-lg bg-[#222222] hover:bg-black text-white font-medium rounded-md px-9 py-3 disabled:opacity-20 disabled:cursor-not-allowed"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default ListingFooter;
