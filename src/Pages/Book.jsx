import { useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Payment from "../components/Booking/Payment";
import Listing from "../components/Booking/Listing";

const Book = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main className=" max-w-screen-2xl xl:px-12 mx-auto py-7 xl:py-20">
      <div className=" flex flex-row gap-3 items-center">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className=" p-2 rounded-full hover:bg-[#f1f1f1] cursor-pointer transition duration-200 ease-in"
        >
          <MdKeyboardArrowLeft size={28} />
        </div>
        <h2 className=" text-[32px] text-[#222222] font-medium">
          Confirm and pay
        </h2>
      </div>
      {/* reservations data */}
      <section className=" grid grid-cols-2 gap-20 pt-10 px-10">
        {/* left side data => reservations data */}
        <Payment />
        {/* right side data => listing details */}
        <Listing />
      </section>
    </main>
  );
};

export default Book;
