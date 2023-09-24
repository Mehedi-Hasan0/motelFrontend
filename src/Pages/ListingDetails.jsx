import { useParams } from "react-router-dom";
import ListingTitle from "../components/ListingDetails/ListingTitle";
import ListingsPhotos from "../components/ListingDetails/ListingsPhotos";
import ListingDescriptions from "../components/ListingDetails/ListingDescriptions";
import ReservationCard from "../components/ListingDetails/ReservationCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOneListingRoomsDetails } from "../redux/actions/houseActions";

const ListingDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state) => state.house.listingDetails);
  const params = useParams();

  const dispatch = useDispatch();

  // listing details data
  const listingData = data?.listing;
  const listedAuthor = data?.listingAuthor;

  useEffect(() => {
    async function getListingData() {
      await dispatch(getOneListingRoomsDetails(params.id));
      setIsLoading(false);
    }
    getListingData();
  }, [params.id, dispatch]);

  return (
    <main className="max-w-screen-xl xl:px-12 mx-auto py-7">
      <section className=" flex flex-col gap-7">
        {/* listing title & wishlist */}
        <ListingTitle listingData={listingData} />
        {/* listing photos */}
        <ListingsPhotos listingData={listingData} />
      </section>
      <section className=" grid grid-cols-6 gap-x-20 pt-16">
        {/* listings description and details */}
        <div className=" col-span-4 flex flex-col min-h-[800px]">
          <ListingDescriptions
            listingData={listingData}
            author={listedAuthor}
          />
        </div>
        {/* reservations of the listing */}
        <div className=" col-span-2 max-h-[900px]">
          <ReservationCard listingData={listingData} />
        </div>
      </section>
    </main>
  );
};

export default ListingDetails;
