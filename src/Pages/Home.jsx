import Category from "../components/Home/Category";

const Home = () => {
  return (
    <main className="max-w-screen-2xl xl:px-10 mx-auto">
      <section className=" py-10 grid grid-cols-12 gap-5">
        <Category styleGrid={"col-span-9"} />
        <div className=" col-span-3 border-[#e2e2e2] border rounded-xl h-14 flex justify-around items-center">
          <p className=" text-xs text-[#222222] font-medium">
            Display total before taxes
          </p>
          <input type="checkbox" className="toggle" />
        </div>
      </section>
    </main>
  );
};

export default Home;
