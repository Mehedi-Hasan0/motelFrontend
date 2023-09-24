import { useSearchParams } from "react-router-dom";
import { useDateFormatting } from "../../hooks/useDateFormatting";

const Payment = () => {
  const [searchParams] = useSearchParams();

  //   making the search params in an obj and store in a vairable
  const searchParamsObj = Object.fromEntries([...searchParams]);

  //   geting the checkin and checkout dates
  const dateObj = {
    checkin: searchParamsObj?.checkin,
    checkout: searchParamsObj?.checkout,
  };

  //   dates
  const formattedDates = useDateFormatting(dateObj);
  //   guests
  const guestNumber = searchParamsObj?.numberOfGuests;

  console.log(formattedDates);

  return (
    <div>
      {/* trips section */}
      <div className=" flex flex-col gap-5">
        <h5 className=" text-[22px] text-[#222222] font-medium">Your trip</h5>
        {/* dates */}
        <div className=" flex flex-row justify-between">
          <span className="text-base text-[#222222]">
            <p className="font-medium">Dates</p>
            <p>{formattedDates}</p>
          </span>
          <p className=" text-base text-[#222222] font-medium underline">
            Edit
          </p>
        </div>
        {/* guests */}
        <div className=" flex flex-row justify-between">
          <span className="text-base text-[#222222]">
            <p className="font-medium">Guests</p>
            <p>
              {guestNumber} {guestNumber === "1" ? "guest" : "guests"}
            </p>
          </span>
          <p className=" text-base text-[#222222] font-medium underline">
            Edit
          </p>
        </div>
        <hr className="w-full h-[1.3px] bg-[#dddddd] mt-5 mb-10" />
      </div>
    </div>
  );
};

export default Payment;
