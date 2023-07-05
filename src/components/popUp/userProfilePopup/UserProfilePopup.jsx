/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import closeIcon from "../../../assets/basicIcon/closeIcon.svg";

const UserProfilePopup = ({ showPopup, setShowPopup, popupData }) => {
  const popUpRef = useRef(null);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <>
      {!showPopup ? null : (
        <div className=" absolute inset-0 w-full h-screen bg-[#0000005c] popup__overlay z-[100]">
          <div
            ref={popUpRef}
            className="absolute left-[27.5%] right-[27.5%] top-[12%] h-[65vh] profile__popup__container w-[45vw] bg-[#ffffff] shadow-2xl rounded-xl overflow-hidden"
          >
            <div className=" flex flex-row justify-between items-center py-3 px-6">
              <img
                src={closeIcon}
                alt="close icon"
                className="w-8 hover:bg-[#f1f1f1] transition-colors rounded-full p-2 cursor-pointer"
                onClick={() => {
                  setShowPopup(false);
                }}
              />
              <div className=" w-6"> </div>
            </div>
            <div className=" px-6">
              <h1 className=" text-2xl text-[#222222] font-medium">
                {popupData?.popUpContent?.header}
              </h1>
              <p className=" text-base text-[#717171] mt-2">
                {popupData?.popUpContent?.subHead}
              </p>
            </div>
            <div className=" px-6 pb-2">
              <input
                type="text"
                placeholder={popupData?.name}
                className="w-full mt-9 px-4 py-4 rounded-lg border-[1.4px] border-[#b0b0b0]"
              />
              <p className=" text-xs text-[#717171] font-semibold mt-1 flex flex-row-reverse">
                0/40 characters
              </p>
            </div>
            <div className="py-3 flex flex-row-reverse border-t border-[#dddddd] mt-5 absolute bottom-0 w-full">
              <button className=" px-6 py-3 bg-[#282828] hover:bg-[#000000] text-white rounded-lg mx-6 font-medium">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfilePopup;
