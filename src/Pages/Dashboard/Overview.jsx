import Cards from "../../components/dashboard/Cards";
import revenueIcon from "../../assets/basicIcon/dollar.png";
import booking from "../../assets/basicIcon/booking.png";
import house from "../../assets/basicIcon/wallet.png";
import categories from "../../assets/basicIcon/travel.png";

const Overview = () => {
  return (
    <section className=" max-w-[1200px] mx-auto xl:px-10 py-12">
      <div className=" flex flex-row justify-between items-center gap-5 md:gap-0">
        {/* later it'll be dynamic data */}
        <Cards
          title={"Total Revenue"}
          icon={revenueIcon}
          heading={"$0.000"}
          subHead={"+12% increase"}
        />
        <Cards
          title={"Active Booking"}
          icon={booking}
          heading={"+0"}
          subHead={"+20% increase"}
        />
        <Cards
          title={"Host houses"}
          icon={house}
          heading={"+0"}
          subHead={"-34% deccrease"}
        />
        <Cards
          title={"Add categories"}
          icon={categories}
          heading={"+0"}
          subHead={"-10% deccrease"}
        />
      </div>
    </section>
  );
};

export default Overview;
