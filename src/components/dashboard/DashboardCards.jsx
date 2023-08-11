import Cards from "../../components/dashboard/Cards";
import revenueIcon from "../../assets/basicIcon/dollar.png";
import booking from "../../assets/basicIcon/booking.png";
import house from "../../assets/basicIcon/wallet.png";
import categories from "../../assets/basicIcon/travel.png";

const DashboardCards = () => {
  return (
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
        title={"Monthly earned"}
        icon={categories}
        heading={"+0"}
        subHead={"-10% deccrease"}
      />
    </div>
  );
};

export default DashboardCards;
