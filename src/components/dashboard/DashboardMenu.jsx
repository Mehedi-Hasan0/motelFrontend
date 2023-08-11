import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const navItem = [
  { name: "Overview", id: 1, to: "/overview=true" },
  { name: "Rent a house", id: 2, to: "/renthouse=true" },
  { name: "Orders", id: 3, to: "/orders=true" },
  { name: "Add categories", id: 4, to: "/addcategories=true" },
];

const DashboardMenu = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [selectedItemId, setSelectedItemId] = useState(1);

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };
  return (
    <section className=" flex flex-row gap-4 md:gap-8 items-center justify-between">
      {navItem.map((item, i) => (
        <div key={i}>
          <Link to={`/users/dashboard/${user?._id}${item.to}`}>
            <p
              className={` cursor-pointer p-2 text-sm whitespace-nowrap ${
                selectedItemId === item.id
                  ? "rounded-full bg-[#f0f0f0] font-medium"
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
