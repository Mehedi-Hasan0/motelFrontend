import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListingFooter = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [loading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const url = window.location.pathname;
  const navigate = useNavigate();

  /**
   * The function `handleNext` navigates to different URLs based on the current URL.
   */
  const handleNext = () => {
    if (url.includes("/become-a-host")) {
      navigate(`/become-a-host/${user?._id}/about-your-place`);
    }
    if (url.includes("/about-your-place")) {
      navigate(`/become-a-host/${user?._id}/structure`);
    }
    if (url.includes("/structure")) {
      navigate(`/become-a-host/${user?._id}/privacy-type`);
    }
  };

  /* The `useEffect` hook in the code snippet is used to update the `progress` state based on the current
URL. */
  useEffect(() => {
    if (url.includes("/about-your-place")) {
      setProgress(0);
    }
    if (url.includes("/structure")) {
      setProgress(10);
    }
    if (url.includes("/privacy-type")) {
      setProgress(20);
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
          className=" bg-[#222222] hover:bg-black text-white rounded-md px-4 py-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default ListingFooter;
