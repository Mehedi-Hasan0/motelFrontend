import { PiHouseLine, PiTent } from "react-icons/pi";
import {
  MdOutlineApartment,
  MdOutlineCabin,
  MdOutlineCastle,
} from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { TbSailboat2, TbCamper } from "react-icons/tb";
import {
  GiMountainCave,
  GiLightningDome,
  GiControlTower,
} from "react-icons/gi";
import { GoContainer } from "react-icons/go";
import { RiEarthquakeLine } from "react-icons/ri";
import { LiaHotelSolid } from "react-icons/lia";
import StructureCard from "../components/listingHouse/StructureCard";
import { useState } from "react";

const ListHouseStepOneStructure = () => {
  const [storedCardData, setStoredCardData] = useState("");

  const handleStoreCardData = (name) => {
    console.log(name);
    setStoredCardData(name);
  };

  return (
    <div className=" flex flex-col gap-10 max-w-screen-md mx-auto my-6">
      <h1 className=" text-[#222222] text-[32px] font-medium">
        Which of these best describes <br /> your place?
      </h1>
      <div className=" grid grid-cols-3 gap-5">
        <StructureCard
          Img={PiHouseLine}
          name={"House"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={MdOutlineApartment}
          name={"Apartment"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={CiCoffeeCup}
          name={"Coffee"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={TbSailboat2}
          name={"Boat"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={MdOutlineCabin}
          name={"Cabin"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={TbCamper}
          name={"Camper"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={MdOutlineCastle}
          name={"Castle"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={GiMountainCave}
          name={"Cave"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={GoContainer}
          name={"Container"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={GiLightningDome}
          name={"Dome"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={RiEarthquakeLine}
          name={"Earth home"}
          onClick={handleStoreCardData}
        />
        <StructureCard
          Img={PiTent}
          name={"Tent"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={GiControlTower}
          name={"Tower"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <StructureCard
          Img={LiaHotelSolid}
          name={"Hotel"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
      </div>
    </div>
  );
};

export default ListHouseStepOneStructure;
