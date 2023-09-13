/* eslint-disable react/prop-types */
const ListingsPhotos = ({ listingData }) => {
  return (
    <div className=" grid grid-cols-3 gap-2 max-h-[400px] min-h-[300px] overflow-y-hidden rounded-2xl">
      <div className=" rounded-tl-2xl rounded-bl-2xl col-span-2">
        <img
          src={listingData?.photos[0]}
          alt="Listing photos"
          className=" rounded-tl-2xl rounded-bl-2xl aspect-video object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-rows-2 gap-y-2 max-h-[400px] min-h-[300px] col-span-1">
        <div className=" overflow-y-hidden">
          <img
            src={listingData?.photos[1]}
            alt="Listing photos"
            className=" rounded-tr-2xl aspect-video object-cover mb-2 w-full h-full"
          />
        </div>
        <div className=" overflow-y-hidden">
          <img
            src={listingData?.photos[2]}
            alt="Listing photos"
            className=" rounded-br-2xl aspect-video object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsPhotos;
