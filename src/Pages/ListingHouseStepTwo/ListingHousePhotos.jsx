import PhotosCard from "../../components/listingHouse/PhotosCard";

const ListingHousePhotos = () => {
  return (
    <div className=" flex flex-col gap-14 max-w-screen-md mx-auto my-6">
      <div>
        <h1 className=" text-[#222222] text-[32px] font-medium">
          Add some photos of your cabin
        </h1>
        <p className="text-lg text-[#717171]">
          You&apos;ll need 5 photos to get started. You can add more or make
          changes later.
        </p>
      </div>
      <PhotosCard />
    </div>
  );
};

export default ListingHousePhotos;
