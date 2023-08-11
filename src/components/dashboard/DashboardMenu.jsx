/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navItem } from "./NavItem";

const DashboardMenu = () => {
  const user = useSelector((state) => state.user.userDetails);

  const activePage = JSON.parse(sessionStorage.getItem("activePage"));

  console.log(activePage);

  const handleItemClick = (id) => {
    JSON.stringify(sessionStorage.setItem("activePage", id));
  };

  return (
    <section className=" flex flex-row gap-4 md:gap-8 items-center justify-between">
      {navItem.map((item, i) => (
        <div key={i}>
          <Link to={`/users/dashboard/${user?._id}${item.to}`}>
            <p
              className={` cursor-pointer p-2 text-sm whitespace-nowrap ${
                activePage === item.id
                  ? "rounded-full bg-[#f0f0f0] font-medium transition duration-200"
                  : " opacity-80"
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.name}
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default DashboardMenu;
