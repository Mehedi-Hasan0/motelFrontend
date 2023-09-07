/* eslint-disable react/prop-types */
const PriceWithTaxCard = ({ style }) => {
  return (
    <div className={`${style}`}>
      <p className=" text-xs text-[#222222] font-medium">
        Display total before taxes
      </p>
      <input type="checkbox" className="toggle" />
    </div>
  );
};

export default PriceWithTaxCard;
