import OverviewCard from "./OverviewCard";

import aboutPlace from "../../assets/aboutPlace.png";
import standOut from "../../assets/standOut.png";
import publish from "../../assets/publish.png";

const StepsOfHosting = () => {
  return (
    <section className=" h-[90vh] grid grid-cols-2 gap-10 justify-between items-center px-20 bg-white max-w-screen-xl xl:px-20 xl:mx-auto mb-20 mt-8">
      <h1 className=" text-[#222222] text-[56px] font-medium leading-tight">
        It’s easy to get started on Motel
      </h1>
      <div className=" flex flex-col gap-5">
        <OverviewCard
          num={1}
          head={"Tell us about your place"}
          desc={
            "Share some basic info, like where it is and how many guests can stay."
          }
          img={aboutPlace}
        />
        <hr className=" my-5 bg-[#dddddd] h-[1.4px]" />
        <OverviewCard
          num={2}
          head={"Make it stand out"}
          desc={
            "Add 5 or more photos plus a title and description—we’ll help you out."
          }
          img={standOut}
        />
        <hr className=" my-5 bg-[#dddddd] h-[1.4px]" />
        <OverviewCard
          num={3}
          head={"Finish up and publish"}
          desc={
            "Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing."
          }
          img={publish}
        />
      </div>
    </section>
  );
};

export default StepsOfHosting;