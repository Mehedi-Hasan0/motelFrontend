import { useLoaderData } from "react-router-dom";
import ListingTitle from "../components/ListingDetails/ListingTitle";
import ListingsPhotos from "../components/ListingDetails/ListingsPhotos";

const ListingDetails = () => {
  const listingData = useLoaderData();
  console.log(listingData);
  return (
    <main className="max-w-screen-xl xl:px-10 mx-auto py-7">
      <section className=" flex flex-col gap-7">
        {/* listing title & wishlist */}
        <ListingTitle listingData={listingData} />
        {/* listing photos */}
        <ListingsPhotos listingData={listingData} />
      </section>
    </main>
  );
};

export default ListingDetails;
