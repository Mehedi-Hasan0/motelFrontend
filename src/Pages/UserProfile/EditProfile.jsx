import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cameraIcon from "../../assets/basicIcon/cameraIcon.png";
import UserProfilePopup from "../../components/popUp/userProfilePopup/userProfilePopup";
import UserAbout from "../../components/userProfile/UserAbout";
import UserProfileOptions from "../../components/userProfile/UserProfileOptions";

const EditProfile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const user = useSelector((state) => state.user.userDetails);
  return (
    <>
      <main className=" max-w-[1200px] mx-auto xl:px-10 py-12 flex min-h-[80vh] relative">
        <section className=" flex flex-row gap-16 items-start flex-auto">
          {user?.userImage ? (
            <figure>
              <img src={user?.userImage?.profile_Url} alt="User image" />
            </figure>
          ) : (
            <div className="flex flex-col gap-4 justify-center items-center w-[350px] h-[220px] p-7 sticky top-[128px]">
              <div className=" min-w-[214px] min-h-[214px] bg-[#222222] rounded-full flex justify-center items-center relative">
                <p className=" text-8xl text-white font-semibold mb-2">
                  {user?.name.firstName.slice(0, 1)}
                </p>
                <div className="absolute flex flex-row gap-2 items-center bg-white shadow-md px-3 py-2 rounded-full -bottom-4 cursor-pointer">
                  <img src={cameraIcon} alt="Choose photo" className=" w-4" />
                  <p className=" text-sm text-[#222222] font-medium">Add</p>
                </div>
              </div>
            </div>
          )}
          <section className="xl:min-h-[400px] flex flex-col flex-1 profile__container">
            <UserProfileOptions
              setShowPopup={setShowPopup}
              setSelectedOption={setSelectedOption}
            />
            <UserAbout setShowPopup={setShowPopup} />
          </section>
        </section>
      </main>
      <div className=" border-t border-[#dddddd] py-5 fixed bottom-0 bg-[#ffffff] w-full z-10 flex flex-row-reverse">
        <Link
          to={`/users/show/${user?._id}`}
          className="px-7 py-3 bg-[#282828] hover:bg-[#000000] text-white rounded-lg mx-6 font-medium"
          onClick={() => {
            window.reload();
          }}
        >
          Done
        </Link>
      </div>

      {showPopup && (
        <UserProfilePopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          popupData={selectedOption}
        />
      )}
    </>
  );
};

export default EditProfile;
