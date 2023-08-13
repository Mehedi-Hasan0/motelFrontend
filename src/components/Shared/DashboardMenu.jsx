/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navItem } from "./NavItem";

const DashboardMenu = () => {
  const user = useSelector((state) => state.user.userDetails);

  const activePage = JSON.parse(sessionStorage.getItem("activePage"));

  const handleItemClick = (id) => {
    // checking if we're going into the create new list page. If yes then we don't have to set item
    if (id === 4) return;

    JSON.stringify(sessionStorage.setItem("activePage", id));

    // for reservations initial active sub menu is 1
    if (id === 2) {
      JSON.stringify(sessionStorage.setItem("reservationsPage", 1));
    }
  };

  return (
    <section className=" flex flex-row gap-4 md:gap-8 items-center justify-between">
      {navItem.map((item, i) => (
        <div key={i}>
          {/* We are checking if the menu is "create a new list" or not. if it is then we are redirecting to create new list layout page */}
          <Link
            to={`${
              item.id === 4
                ? `${item.to}`
                : `/users/dashboard/${user?._id}${item.to}`
            }`}
          >
            <p
              className={` cursor-pointer p-2 text-sm whitespace-nowrap rounded-full hover:bg-[#f0f0f0] transition duration-300 ${
                activePage === item.id
                  ? "font-medium text-[#ff3f62ff] hover:bg-white transition duration-200"
                  : " opacity-80"
              }`}
              onClick={() => {
                handleItemClick(item.id);
              }}
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
