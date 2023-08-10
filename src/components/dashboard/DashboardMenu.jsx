import { useState } from "react";

const navItem = [
  { name: "Overview", id: 1 },
  { name: "Rent a house", id: 2 },
  { name: "Orders", id: 3 },
  { name: "Add categories", id: 4 },
];

const DashboardMenu = () => {
  const [selectedItemId, setSelectedItemId] = useState(1);

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };
  return (
    <section className=" flex flex-row gap-4 md:gap-8 items-center justify-between">
      {navItem.map((item, i) => (
        <div key={i}>
          <p
            className={` cursor-pointer p-2 text-sm whitespace-nowrap ${
              selectedItemId === item.id
                ? "rounded-full bg-[#f0f0f0] font-medium"
                : ""
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </p>
        </div>
      ))}
    </section>
  );
};

export default DashboardMenu;
