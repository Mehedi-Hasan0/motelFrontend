import Category from "../components/Home/Category";

const Home = () => {
  return (
    <div className=" py-10 grid grid-cols-12">
      <div className=" col-span-9">
        <Category />
      </div>
      <div className=" col-span-3"> </div>
    </div>
  );
};

export default Home;
