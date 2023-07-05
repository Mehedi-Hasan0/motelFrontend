/* eslint-disable react/prop-types */
import { profileOptions } from "./userProfileApi";

const UserProfile = ({ setShowPopup, setSelectedOption }) => {
  console.log(profileOptions);
  return (
    <>
      <div className=" flex flex-col">
        <div>
          <h1 className=" text-[#222222] text-[32px] font-semibold">
            Your profile
          </h1>
          <div className=" text-base text-[#717171] max-w-[85%] mt-5">
            The information you share will be used across Motel to help other
            guests and Hosts get to know you.
          </div>
        </div>
        <section className=" grid grid-cols-2 gap-x-16 mt-4">
          {profileOptions.map((option, i) => {
            return (
              <div
                key={i}
                className="border-b border-[#dedede] cursor-pointer"
                onClick={() => {
                  setSelectedOption(option);
                  setShowPopup((prev) => !prev);
                }}
              >
                <div className=" flex flex-row gap-3 items-center py-6 px-2 hover:bg-[#f7f7f7] rounded-xl">
                  <img src={option.img} alt="Options" className=" w-7" />
                  <p className=" text-base text-[#717171]">{option.name}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default UserProfile;
