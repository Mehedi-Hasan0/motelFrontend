import Charts from "../../components/dashboard/Charts";
import DashboardCards from "../../components/dashboard/DashboardCards";

const Overview = () => {
  return (
    <section className=" max-w-[1200px] mx-auto xl:px-10 py-12">
      <DashboardCards />

      <div className=" grid grid-cols-5 gap-x-5 lg:gap-x-10">
        <div className="bg-white shadow rounded-xl border flex flex-col gap-5 p-7 min-h-[350px] col-span-3">
          <p className=" text-zinc-800 text-base font-semibold">Overview</p>
          <>
            {/* dynamic data for charts */}
            <Charts />
          </>
        </div>
        <div className="col-span-2 bg-white shadow rounded-xl border flex flex-col gap-1 p-7 min-h-[350px] overflow-y-auto">
          <p className=" text-zinc-800 text-base font-semibold">
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
