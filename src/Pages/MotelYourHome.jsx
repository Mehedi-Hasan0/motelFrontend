import { useState } from "react";
import search from "../assets/basicIcon/searchRed.svg";

const MotelYourHome = () => {
  const [perNight, setPerNightChange] = useState(1);
  const [isTooltipActive, setActiveTooltip] = useState(false);

  // calculating per night earning
  const perNightEarnig = parseInt(perNight * 37);

  const handlePerNightChange = (e) => {
    setPerNightChange(e.target.value);
  };

  return (
    <main className=" mt-20">
      <section className=" grid grid-cols-2 pb-10">
        <div className=" flex flex-col gap-5 mx-6">
          {/* heading */}
          <div className=" flex flex-col gap-2 text-[#222222] font-medium text-5xl text-center">
            <h1 className=" text-[#ff385c]"> Motel it.</h1>
            <h1>You could earn</h1>
          </div>
          {/* amount in $ */}
          <p className=" text-center text-[#222222] font-semibold text-7xl my-4">
            ${perNightEarnig}
          </p>
          {/* description of earning */}

          <div className=" text-[#222222] flex gap-1 justify-center h-5">
            {!isTooltipActive && (
              <>
                <span className=" font-medium underline underline-offset-3">
                  {perNight} nights
                </span>
                <span> at an estimated $37 a night</span>
              </>
            )}
          </div>
          {/* scroll bar for nights increasing */}
          <div
            data-tip={`${perNight} nights`}
            className={`tooltip min-w-[400px] mx-auto ${
              isTooltipActive ? " tooltip-open" : ""
            }`}
            onMouseEnter={() => {
              setActiveTooltip((prev) => !prev);
            }}
            onMouseLeave={() => {
              setActiveTooltip((prev) => !prev);
            }}
          >
            <input
              type="range"
              min={1}
              max={30}
              onChange={handlePerNightChange}
              value={perNight}
              className="range"
            />
          </div>
          {/* how pricing is defined */}
          <p className=" text-sm text-[#717171] underline font-medium text-center">
            Learn how we estimates you earnings
          </p>
          {/* selected places */}
          <div className=" flex flex-row justify-between gap-1 items-center min-w-[400px] rounded-full border border-[#dddddd] mx-auto px-5 py-3">
            <img src={search} alt="search" className=" w-6" />
            <div className=" flex flex-col">
              <p>Country name</p>
              <p>Entire place/private place - 1 bed room</p>
            </div>
          </div>
        </div>
        {/* map section */}
        <div></div>
      </section>
    </main>
  );
};

export default MotelYourHome;
