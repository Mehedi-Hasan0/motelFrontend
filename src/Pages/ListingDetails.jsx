import { useLoaderData } from "react-router-dom";
import ListingTitle from "../components/ListingDetails/ListingTitle";

const ListingDetails = () => {
  const listingData = useLoaderData();
  console.log(listingData);
  return (
    <main className="max-w-screen-xl xl:px-10 mx-auto py-7">
      <section className=" flex flex-col gap-7">
        <ListingTitle listingData={listingData} />
      </section>
    </main>
  );
};

export default ListingDetails;
