import Cards from "../../components/dashboard/Cards";
import revenueIcon from "../../assets/basicIcon/dollar.png";
import booking from "../../assets/basicIcon/booking.png";
import house from "../../assets/basicIcon/wallet.png";
import categories from "../../assets/basicIcon/travel.png";
import Charts from "../../components/dashboard/Charts";

const Overview = () => {
  return (
    <section className=" max-w-[1200px] mx-auto xl:px-10 py-12">
      <div className=" flex flex-row justify-between items-center gap-5 md:gap-0 mb-12">
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
      <div className=" grid grid-cols-5 gap-x-5 lg:gap-x-10">
        <div className="bg-white shadow rounded-xl border flex flex-col gap-5 p-7 min-h-[350px] col-span-3">
          <p className=" text-zinc-800 text-base font-medium">Overview</p>
          <>
            {/* dynamic data for charts */}
            <Charts />
          </>
        </div>
        <div className="col-span-2 bg-white shadow rounded-xl border flex flex-col gap-1 p-7 min-h-[350px] overflow-y-auto">
          <p className=" text-zinc-800 text-base font-medium">
            Recent bookings
          </p>
          <p className="text-[#717171] text-sm">
            You made $0 from recent bookings this month.
          </p>
          {/* dynamic data for previous bookings */}
        </div>
      </div>
    </section>
  );
};

export default Overview;
