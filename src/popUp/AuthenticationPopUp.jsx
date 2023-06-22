// import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../assets/basicIcon/closeIcon.svg";
import google from "../assets/basicIcon/google.svg";
import facebook from "../assets/basicIcon/facebook.svg";
import { useForm } from "react-hook-form";
import { API } from "../backend";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import LogInPopup from "./LogInPopup";
import CreateUserPopup from "./CreateUserPopup";

// eslint-disable-next-line react/prop-types
const AuthenticationPopUp = ({ popup, setPopup }) => {
  const [inputFocused, setInputFocused] = useState(false);
  const { handleSubmit, register } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateUserPopup, setShowCreateUserPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [defaultPopup, setDefaultPopup] = useState(true);
  const popUpRef = useRef(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
    setDefaultPopup(true);
  };

  const handleCheckEmail = async (data) => {
    const email = data.email;
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API}auth/check_email`,
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      const responseData = response?.data;
      if (responseData?.success === 1) {
        setDefaultPopup(false);
        setShowLoginPopup(true);
      } else if (responseData?.success === 0) {
        setDefaultPopup(false);
        setShowCreateUserPopup(true);
      }
      // Update state or perform any other actions based on the response data
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
            className={`absolute left-[30%] right-[30%] top-[12%] ${
              showLoginPopup
                ? " h-[60vh] popup__container__login"
                : "h-[80vh] popup__container"
            } w-[40vw] bg-[#ffffff] shadow-2xl rounded-xl  overflow-y-auto`}
          >
            {!showLoginPopup ? null : (
              <LogInPopup
                onBack={handleCloseLoginPopup}
                inputFocused={inputFocused}
                onInputFocus={handleInputFocus}
              />
            )}
            {!showCreateUserPopup ? null : <CreateUserPopup />}
            {!defaultPopup ? null : (
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
                  <div className="w-[14px]"> </div>
                </div>
                {/* welcome option */}
                <div className="px-8 pt-1">
                  <h2 className="font-medium text-[22px] text-[#222222]">
                    Welcome to Motel
                  </h2>
                  <form onSubmit={handleSubmit(handleCheckEmail)}>
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
                      {...register("email", { required: true })}
                    />
                    <p className=" text-xs text-[#222222] pt-3 mb-5 opacity-80 ml-[2px]">
                      We’ll send a confirmation email to verify your email
                      address. <br />{" "}
                      <Link className=" font-semibold underline">
                        Privacy Policy
                      </Link>
                    </p>
                    <button
                      className={`bg-[#ff385c] hover:bg-[#d90b63] transition-all duration-300 text-white font-medium rounded-lg p-3 w-full disabled:bg-[#dddddd] ${
                        isLoading ? " cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <PulseLoader
                          color="#f7f7f7"
                          size={7}
                          margin={4}
                          speedMultiplier={0.6}
                        />
                      ) : (
                        "Continue"
                      )}
                    </button>
                  </form>
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
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default AuthenticationPopUp;
