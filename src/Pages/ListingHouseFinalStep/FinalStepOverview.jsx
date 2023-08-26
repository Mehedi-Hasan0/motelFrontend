import video from "../../assets/video/step_3.mp4";

const FinalStepOverview = () => {
  return (
    <section className=" h-[80vh] flex flex-row justify-around gap-10 items-center w-full">
      <div className="flex flex-col gap-4 text-[#222222] px-10">
        <div className=" flex flex-col gap-2 font-medium min-h-[100px]">
          <p className=" text-lg mb-2">Step 3</p>
          <h2 className=" text-5xl">Finish up and publish</h2>
        </div>
        <p className=" text-lg">
          Finally, you’ll choose if you&apos;d like to start with an experienced
          guest, then you&apos;ll set your nightly price. Answer a few quick
          questions and publish when you&apos;re ready.
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

export default FinalStepOverview;
