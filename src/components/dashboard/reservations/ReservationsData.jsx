/* eslint-disable react/prop-types */
const ReservationsData = ({ active }) => {
  return (
    <section className="  py-28 flex justify-center items-center">
      <div className=" text-xl font-semibold">
        {active === 1 ? (
          <div>You have no upcoming reservations</div>
        ) : active === 2 || active === 3 ? (
          <div>No results found</div>
        ) : (
          <div>You have no reservations</div>
        )}
      </div>
    </section>
  );
};

export default ReservationsData;
