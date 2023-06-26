/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { API } from "../../backend";
import api from "../../backend";
import { useSelector } from "react-redux";

const LogInPopup = ({ loginEmail }) => {
  const { handleSubmit, register, reset } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user);
  console.log(user);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (data) => {
    setIsLoading(true);
    const response = await axios.post(`${API}auth/log_in`, {
      email: loginEmail,
      password: data.password,
    });
    const userData = response.data;
    setIsLoading(false);
    console.log(userData);
    let accessToken = localStorage.getItem("accessToken");
    let refreshToken = localStorage.getItem("refreshToken");
    console.log(refreshToken);
    if (!accessToken) {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(userData?.accessToken)
      );
    } else if (accessToken) {
      accessToken = userData?.accessToken;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
    }
    if (!refreshToken) {
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(userData?.refreshToken)
      );
    } else if (refreshToken) {
      refreshToken = userData?.refreshToken;
      console.log(refreshToken);
      localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
    }
  };

  const handleAuthenticated = async (data) => {
    const response = await api.post("/auth/post");
    console.log(response);
  };

  const handleLogout = async (data) => {
    const response = await api.post("/auth/logout", data);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log(response);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="px-8 pt-1">
        {/* <form onSubmit={handleSubmit(handleLogin)}> */}
        {/* <form onSubmit={handleSubmit(handleLogout)}> */}
        <form onSubmit={handleSubmit(handleAuthenticated)}>
          <div className="relative my-4">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full border-[1.5px] border-[#dddddd] p-3 rounded-lg transition-all duration-300"
              {...register("password", { required: true })}
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
