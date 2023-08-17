import video from "../../assets/video/step_2.mp4";

const StepTwoOverview = () => {
  return (
    <section className=" h-[80vh] flex flex-row justify-around gap-10 items-center w-full">
      <div className="flex flex-col gap-4 text-[#222222] px-10">
        <div className=" flex flex-col gap-2 font-medium min-h-[130px]">
          <p className=" text-lg">Step 2</p>
          <h2 className=" text-5xl">Make your place stand out</h2>
        </div>
        <p className=" text-lg">
          In this step, you’ll add some of the amenities your place offers, plus
          5 or more photos. Then, you’ll create a title and description.
        </p>
      </div>
      <video
        src={video}
        autoPlay={true}
        muted
        type="video/mp4"
        className=" max-w-md"
      />
    </section>
  );
};

export default StepTwoOverview;
