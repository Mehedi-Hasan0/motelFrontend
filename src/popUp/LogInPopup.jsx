/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import backIcon from "../assets/basicIcon/backIcon.png";
const LogInPopup = ({ onBack }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleBackClcik = () => {
    onBack();
  };
  return (
    <div className="flex flex-col gap-4">
      <div className=" flex items-center justify-between w-full py-4 border-b-[1px] px-8">
        <img
          src={backIcon}
          alt="close icon"
          className="w-8 hover:bg-[#f1f1f1] transition-colors rounded-full p-2 cursor-pointer"
          onClick={() => {
            handleBackClcik();
          }}
        />
        <p className="text-base font-semibold text-[#222222]">Log in</p>
        <div className="w-[24px]"> </div>
      </div>
      <div className="px-8 pt-1">
        <form>
          <div className="relative my-4">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full border-[1.5px] border-[#dddddd] p-3 rounded-lg transition-all duration-300"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="absolute top-[50%] right-3 transform -translate-y-1/2 text-[#222222] text-xs font-semibold underline cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </div>
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
              "Log in"
            )}
          </button>
        </form>
      </div>
      <Link className=" text-[#222222] text-sm font-medium underline pt-3 px-8">
        Forgot Password?
      </Link>
    </div>
  );
};

export default LogInPopup;
