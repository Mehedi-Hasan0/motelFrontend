import step1 from "../../assets/video/step1_video.mp4";

const ListHouseStepOne = () => {
  return (
    <section className=" h-[80vh] flex flex-row justify-around gap-10 items-center w-full">
      <div className="flex flex-col gap-4 text-[#222222] px-10">
        <div className=" flex flex-col gap-2 font-medium">
          <p className=" text-lg">Step 1</p>
          <h2 className=" text-5xl">Tell us about your place</h2>
        </div>
        <p className=" text-lg">
          In this step, we&apos;ll ask you which type of property you have and
          if guests will book the entire place or just a room. Then let us know
          the location and how many guests can stay.
        </p>
      </div>
      <video
        src={step1}
        autoPlay={true}
        muted
        type="video/mp4"
        className=" max-w-md"
      />
    </section>
  );
};

export default ListHouseStepOne;
