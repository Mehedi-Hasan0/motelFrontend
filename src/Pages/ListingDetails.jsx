import { useLoaderData } from "react-router-dom";
import ListingTitle from "../components/ListingDetails/ListingTitle";
import ListingsPhotos from "../components/ListingDetails/ListingsPhotos";
import ListingDescriptions from "../components/ListingDetails/ListingDescriptions";

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
      <section className=" grid grid-cols-5 gap-5 pt-16">
        {/* listings description and details */}
        <div className=" col-span-3 flex flex-col">
          <ListingDescriptions
            listingData={listingData}
            author={listedAuthor}
          />
        </div>
        {/* reservations of the listing */}
        <div className=" col-span-2"> </div>
      </section>
    </main>
  );
};

export default ListingDetails;
