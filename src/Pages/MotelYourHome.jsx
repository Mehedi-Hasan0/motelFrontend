import { useState } from "react";
import Map from "../components/Map";
import HouseHostingDetails from "../components/hostingHouse/HouseHostingDetails";
import HouseListingGuide from "../components/hostingHouse/HouseListingGuide";
import Apartments from "../components/hostingHouse/Apartments";

const MotelYourHome = () => {
  const [latAndLong, setLatAndLong] = useState([]);
  return (
    <main className=" mt-20 xl:px-20 xl:mx-auto max-w-screen-xl">
      <section className=" grid grid-cols-2 gap-7 pb-10">
        <HouseHostingDetails setLatAndLong={setLatAndLong} />
        {/* map section */}
        <Map latAndLong={latAndLong} />
        {/* setup guidelines */}
      </section>
      <HouseListingGuide />
      <Apartments />
    </main>
  );
};

export default MotelYourHome;
