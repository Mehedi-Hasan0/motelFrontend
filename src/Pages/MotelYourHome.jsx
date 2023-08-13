import { useState } from "react";
import Map from "../components/Map";
import HouseHostingDetails from "../components/hostingHouse/HouseHostingDetails";

const MotelYourHome = () => {
  const [latAndLong, setLatAndLong] = useState([]);
  return (
    <main className=" mt-20 xl:px-20 xl:mx-auto">
      <section className=" grid grid-cols-2 gap-7 pb-10">
        <HouseHostingDetails setLatAndLong={setLatAndLong} />
        {/* map section */}
        <Map latAndLong={latAndLong} />
      </section>
    </main>
  );
};

export default MotelYourHome;
