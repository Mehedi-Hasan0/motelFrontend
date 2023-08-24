import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRole } from "../../redux/actions/userActions";
import { PulseLoader } from "react-spinners";
import {
  saveAmenities,
  saveFloorPlan,
  saveLocation,
  savePrivacyType,
  saveStructure,
} from "../../redux/actions/houseActions";

const ListingFooter = () => {
  const user = useSelector((state) => state.user.userDetails);
  const createHouseData = useSelector((state) => state.house);
  const [loading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const url = window.location.pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(createHouseData);
  /**
   * The function `handleNext` navigates to different URLs based on the current URL.
   */

  const steps = [
    "/become-a-host",
    `/become-a-host/${user?._id}/about-your-place`,
    `/become-a-host/${user?._id}/structure`,
    `/become-a-host/${user?._id}/privacy-type`,
    `/become-a-host/${user?._id}/location`,
    `/become-a-host/${user?._id}/floor-plan`,
    `/become-a-host/${user?._id}/stand-out`,
    `/become-a-host/${user?._id}/amenities`,
    `/become-a-host/${user?._id}/photos`,
  ];

  const currentStepIndex = steps.indexOf(url);
  const currentListingHouseId = createHouseData?.currentListingHouse?._id;

  const handleNext = async () => {
    if (currentStepIndex < steps.length - 1) {
      setIsLoading(true);

      if (currentStepIndex === 0) {
        // Handle any actions specific to the user role
        await dispatch(userRole());
      } else if (currentStepIndex === 2) {
        const houseData = {
          houseType: createHouseData?.newHouse?.houseType,
          houseId: currentListingHouseId,
        };
        // Handle data saving for the "structure" step
        await dispatch(saveStructure(houseData));
      } else if (currentStepIndex === 3) {
        const houseData = {
          privacyType: createHouseData?.newHouse?.privacyType,
          houseId: currentListingHouseId,
        };
        // data saving for privacy type in db
        await dispatch(savePrivacyType(houseData));
      } else if (currentStepIndex === 4) {
        const locationData = {
          location: createHouseData?.newHouse?.location,
          houseId: currentListingHouseId,
        };
        // data saving for location in db
        await dispatch(saveLocation(locationData));
      } else if (currentStepIndex === 5) {
        const floorPlanData = {
          floorPlan: createHouseData?.newHouse?.floorPlan,
          houseId: currentListingHouseId,
        };
        // data saving for floor plan in db
        await dispatch(saveFloorPlan(floorPlanData));
      } else if (currentStepIndex === 7) {
        const amenitiesData = {
          amenities: createHouseData?.newHouse?.amenities,
          houseId: currentListingHouseId,
        };
        // data saving for amenites plan in db
        await dispatch(saveAmenities(amenitiesData));
      }

      setIsLoading(false);

      // Navigate to the next step
      navigate(steps[currentStepIndex + 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // const handleNext = async () => {
  //   if (url?.includes("/become-a-host")) {
  //     setIsLoading(true);
  //     // do data saving actions
  //     await dispatch(userRole());
  //     setIsLoading(false);
  //     // navigate to the next url
  //     navigate(`/become-a-host/${user?._id}/about-your-place`);
  //   }
  //   if (url?.includes("/about-your-place")) {
  //     navigate(`/become-a-host/${user?._id}/structure`);
  //   }
  //   if (url?.includes("/structure")) {
  //     // do data saving action
  //     await dispatch(updateNewHouseData(createHouseData));

  //     // navigate to next url
  //     navigate(`/become-a-host/${user?._id}/privacy-type`);
  //   }
  //   if (url?.includes("/privacy-type")) {
  //     navigate(`/become-a-host/${user?._id}/location`);
  //   }
  //   if (url?.includes("/location")) {
  //     navigate(`/become-a-host/${user?._id}/floor-plan`);
  //   }
  //   if (url?.includes("/floor-plan")) {
  //     navigate(`/become-a-host/${user?._id}/stand-out`);
  //   }
  //   if (url?.includes("/stand-out")) {
  //     navigate(`/become-a-host/${user?._id}/amenities`);
  //   }
  //   if (url?.includes("/amenities")) {
  //     navigate(`/become-a-host/${user?._id}/photos`);
  //   }
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

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
    if (url?.includes("/photos")) {
      setProgress(60);
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
          className=" text-lg bg-[#222222] hover:bg-black text-white font-medium rounded-md px-9 py-3 disabled:bg-[#dddddd] disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={loading}
        >
          {loading ? (
            <>
              <PulseLoader
                color="#f7f7f7"
                size={7}
                margin={4}
                speedMultiplier={0.6}
              />
            </>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </footer>
  );
};

export default ListingFooter;
