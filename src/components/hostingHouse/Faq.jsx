import FaqOptions from "./FaqOptions";

const Faq = () => {
  return (
    <section className=" my-24 bg-[#f7f7f7] px-20 py-16 grid grid-cols-2 justify-between gap-10 rounded-2xl">
      <h1 className=" text-[#222222] text-[40px] font-medium">
        Your questions, <br /> answered
      </h1>
      <div>
        <FaqOptions />
      </div>
    </section>
  );
};

export default Faq;
