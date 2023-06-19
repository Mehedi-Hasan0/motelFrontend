import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../assets/basicIcon/closeIcon.svg";
import google from "../assets/basicIcon/google.svg";
import facebook from "../assets/basicIcon/facebook.svg";
import { useRef } from "react";
import { useEffect } from "react";

const AuthenticationPopUp = ({ popup, setPopup }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const popUpRef = useRef(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setPopup(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {popup !== true ? null : (
        <div className=" absolute inset-0 w-screen h-screen bg-[#0000005c] popup__overlay">
          <div
            ref={popUpRef}
            className="absolute left-[30%] right-[30%] top-[12%] h-[80vh] w-[40vw] bg-[#ffffff] shadow-2xl rounded-xl  overflow-y-auto  popup__container"
          >
            <div className="flex flex-col gap-4">
              <div className=" flex items-center w-full py-4 border-b-[1px] px-8">
                <img
                  src={closeIcon}
                  alt="close icon"
                  className="w-8 hover:bg-[#f1f1f1] transition-colors rounded-full p-2 cursor-pointer"
                  onClick={() => {
                    setPopup(false);
                  }}
                />
                <p className="text-base mx-auto font-semibold text-[#222222]">
                  Log in or sign up
                </p>
              </div>
              {/* welcome option */}
              <div className="px-8 pt-1">
                <h2 className="font-medium text-[22px] text-[#222222]">
                  Welcome to Motel
                </h2>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full border-[1.5px] border-[#dddddd] p-3 rounded-lg transition-all duration-300 mt-4 ${
                      inputFocused
                        ? "placeholder-shrink"
                        : "placeholder-restore"
                    }`}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <p className=" text-xs text-[#222222] pt-3 mb-5 opacity-80 ml-[2px]">
                    We’ll send a confirmation email to verify your email
                    address. <br />{" "}
                    <Link className=" font-semibold underline">
                      Privacy Policy
                    </Link>
                  </p>
                  <button className="bg-[#ff385c] hover:bg-[#d90b63] transition-all duration-300 text-white font-medium rounded-lg p-3 w-full">
                    Continue
                  </button>
                </div>
              </div>
              {/* devider */}
              <div className="flex flex-row items-center px-8">
                <div className="h-[1.2px] w-full inline-block bg-[#dddddd]"></div>
                <p className="inline-block text-xs mx-2">or</p>
                <div className="h-[1.2px] w-full inline-block bg-[#dddddd]"></div>
              </div>
              {/* continue with google/facebook */}
              <div className=" flex flex-col gap-4 px-8">
                <div className=" w-full flex flex-row items-center border border-[#222222] rounded-lg py-[10px] bg-[#ffffff] hover:bg-[#f7f7f7] transition-colors cursor-pointer">
                  <img
                    src={google}
                    alt="Log in with google"
                    className="w-6 ml-5"
                  />
                  <p className="text-sm mx-auto font-medium text-[#222222]">
                    Continue with Google
                  </p>
                </div>
                <div className=" w-full flex flex-row items-center border border-[#222222] rounded-lg py-[10px] bg-[#ffffff] hover:bg-[#f7f7f7] transition-colors cursor-pointer">
                  <img
                    src={facebook}
                    alt="Log in with facebook"
                    className="w-6 ml-5"
                  />
                  <p className="text-sm mx-auto font-medium text-[#222222]">
                    Continue with Facebook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
// prop types
AuthenticationPopUp.propTypes = {
  popup: PropTypes.bool,
  setPopup: PropTypes.bool,
};
export default AuthenticationPopUp;
