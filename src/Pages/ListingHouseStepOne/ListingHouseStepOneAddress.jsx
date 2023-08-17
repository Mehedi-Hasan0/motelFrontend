import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewHouse } from "../../redux/actions/houseActions";
import { Country } from "country-state-city";
import Select from "react-select";

const ListingHouseStepOneAddress = () => {
  const houseData = useSelector((state) => state.house);
  const [country, setCountry] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [postCode, setPostCode] = useState(null);
  const dispatch = useDispatch();

  const handleStoreCardData = () => {
    if (address1) {
      let locationData = {
        country: country,
        addressLineOne: address1,
        addressLineTwo: address2,
        city: city,
        state: state,
        postCode: postCode,
      };
      dispatch(
        createNewHouse(
          houseData.newHouse?.houseType,
          houseData.newHouse?.privacyType,
          locationData
        )
      );
    }
  };

  const handleAddress1 = (e) => {
    setAddress1(e.target.value);
  };
  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const hanldePostCode = (e) => {
    setPostCode(e.target.value);
  };

  return (
    <section className=" flex flex-col gap-10 max-w-screen-md mx-auto my-6 2xl:h-[80vh]">
      <div className=" flex flex-col gap-2">
        <h1 className=" text-[#222222] text-[32px] font-medium">
          Confirm your address
        </h1>
        <p className="text-lg text-[#717171]">
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>
        <div className=" flex flex-col gap-5 mt-5">
          <Select
            options={Country.getAllCountries()}
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            value={country}
            onChange={(item) => {
              setCountry(item);
            }}
            className=" "
            placeholder=" Country / Region?"
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "12px", // Custom styling for react select
                borderRadius: "8px",
              }),
            }}
          />
          <input
            type="text"
            placeholder="Address line 1"
            className="input input-bordered w-full p-3"
            onChange={handleAddress1}
            onBlur={handleStoreCardData}
          />
          <input
            type="text"
            placeholder="Address line 2 (if applicable)"
            className="input input-bordered w-full p-3"
            onChange={handleAddress2}
            onBlur={handleStoreCardData}
          />
          <input
            type="text"
            placeholder="City / village (if applicable)"
            className="input input-bordered w-full p-3"
            onChange={handleCity}
            onBlur={handleStoreCardData}
          />
          <input
            type="text"
            placeholder="State / province / territory (if applicable)"
            className="input input-bordered w-full p-3"
            onChange={handleState}
            onBlur={handleStoreCardData}
          />
          <input
            type="number"
            placeholder="Postal code (if applicable)"
            className="input input-bordered w-full p-3"
            onChange={hanldePostCode}
            onBlur={handleStoreCardData}
          />
        </div>
      </div>
    </section>
  );
};

export default ListingHouseStepOneAddress;
