import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Payment from "../components/Booking/Payment";
import Listing from "../components/Booking/Listing";
import { API } from "../backend";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PropagateLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { getOneListingRoomsDetails } from "../redux/actions/houseActions";

const Book = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  //   making the search params in an obj and store in a vairable
  const searchParamsObj = Object.fromEntries([...searchParams]);

  const navigate = useNavigate();

  const params = useParams();
  const listingId = params?.id;

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await dispatch(getOneListingRoomsDetails(listingId));
      setIsLoading(false);
    })();
  }, [listingId, dispatch, setIsLoading]);

  // stripe provider for elements component like paymaent component
  useEffect(() => {
    fetch(`${API}reservations/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${API}reservations/create_payment_intent`, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center w-full h-[60dvh]">
        <PropagateLoader color="#565656" speedMultiplier={0.8} />
      </div>
    );
  }

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
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <Payment searchParamsObj={searchParamsObj} />
          </Elements>
        )}
        {/* right side data => listing details */}
        <Listing searchParamsObj={searchParamsObj} />
      </section>
    </main>
  );
};

export default Book;
