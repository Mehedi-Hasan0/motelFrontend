import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/basicIcon/backIcon.png";
import ReservationsList from "../../components/dashboard/reservations/ReservationsList";

const Reservations = () => {
  const location = useNavigate();
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
        <ReservationsList />
      </>
    </section>
  );
};

export default Reservations;
