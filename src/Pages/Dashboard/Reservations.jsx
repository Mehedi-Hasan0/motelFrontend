import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/basicIcon/backIcon.png";
import ReservationsList from "../../components/dashboard/reservations/ReservationsList";
import ReservationsData from "../../components/dashboard/reservations/ReservationsData";
import { useEffect, useState } from "react";

const Reservations = () => {
  const location = useNavigate();

  const [activePage, setActivePage] = useState(1);
  const active = JSON.parse(sessionStorage.getItem("reservationsPage"));

  useEffect(() => {
    const activePageNumber = JSON.parse(sessionStorage.getItem("reservations"));
    if (activePageNumber !== activePage) {
      setActivePage(activePageNumber);
    }
  }, [activePage]);

  return (
    <section className=" max-w-[1200px] mx-auto xl:px-11 py-8">
      <div
        onClick={() => {
          location("/");
        }}
        className=" cursor-pointer hover:rounded-full hover:bg-[#f1f1f1] inline-block p-4 -ml-4"
      >
        <img src={backIcon} alt="back" className=" w-4 mix-blend-darken" />
      </div>
      <>
        <ReservationsList active={active} setActivePage={setActivePage} />
      </>
      <>
        <ReservationsData active={active} />
      </>
    </section>
  );
};

export default Reservations;
