import { useEffect, useState } from "react";
import Category from "../components/Home/Category";
import PriceWithTaxCard from "../components/Home/PriceWithTaxCard";
import { useQuery } from "@tanstack/react-query";
import { API } from "../backend";
import axios from "axios";
import HomePageSkeleton from "../components/HomePageSkeleton";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("House");
  const [hasScroll, setHasScroll] = useState(false);

  // fetching all listing data
  const allListingData = useQuery({
    queryKey: ["allListing"],
    queryFn: async () => {
      const res = await axios.get(`${API}house/get_all_listing`);
      return res.data.allListingData;
    },
  });

  // fetching listing data with cat
  const { data: catListing } = useQuery({
    queryKey: ["catListing"],
    queryFn: async () => {
      const res = await axios.get(`${API}house/get_listing_with_cat`, {
        category: selectedCategory,
      });
      console.log(res, "catListing");

      return res;
    },
  });

  const handleScrollTracking = () => {
    const scrollPosition = window.scrollY;

    // checking if we scroll from top
    if (scrollPosition >= 20) {
      setHasScroll(true);
    } else if (scrollPosition <= 10) {
      setHasScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTracking);

    return () => {
      window.removeEventListener("scroll", handleScrollTracking);
    };
  }, []);

  if (allListingData.isLoading) {
    return <HomePageSkeleton />;
  }

  return (
    <main className="max-w-screen-2xl xl:px-10 mx-auto">
      <section
        className={` pt-8 grid grid-cols-12 gap-5 bg-white sticky top-16 z-30 ${
          hasScroll ? " shadow" : " shadow-none"
        }`}
      >
        {/* categories */}
        <Category
          styleGrid={"col-span-9"}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* taxes toggle card */}
        <PriceWithTaxCard
          style={
            " col-span-3 border-[#e2e2e2] border rounded-xl h-14 flex justify-around items-center"
          }
        />
      </section>
      {/* house listing data section */}
      <section className=" py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto gap-5">
        {allListingData.data &&
          allListingData.data.length !== 0 &&
          allListingData.data.map((listing) => {
            return (
              <div key={listing._id}>
                <p>{listing?.title}</p>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default Home;
