import { useLoaderData } from "react-router-dom";
import ListingTitle from "../components/ListingDetails/ListingTitle";
import ListingsPhotos from "../components/ListingDetails/ListingsPhotos";
import ListingDescriptions from "../components/ListingDetails/ListingDescriptions";
import ReservationCard from "../components/ListingDetails/ReservationCard";

const ListingDetails = () => {
  const data = useLoaderData();
  const listingData = data?.listing;
  const listedAuthor = data?.listingAuthor;
  console.log(data);
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
        <div className=" col-span-2 max-h-[700px]">
          <ReservationCard listingData={listingData} />
        </div>
      </section>
    </main>
  );
};

export default ListingDetails;
