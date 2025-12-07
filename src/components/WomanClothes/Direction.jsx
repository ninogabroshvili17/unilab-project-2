import arrowRight from "../../assets/icons/arrowRight.svg";

const Direction = ({ brand }) => {
  return (
    <div className="font-Lato px-5">
      <div className="max-w-[1440px] mx-auto flex items-center gap-2 text-sm text-[#555] h-24 pt-6">
        <span>Homepage</span>
        <img src={arrowRight} alt="arrow" className="w-[9px] h-2" />

        <span>Women</span>
        <img src={arrowRight} alt="arrow" className="w-[9px] h-2" />

        <span>Clothes</span>

        {/* ONLY SHOW THIS IF brand EXISTS */}
        {brand && (
          <>
            <img src={arrowRight} alt="arrow" className="w-[9px] h-2" />
            <span className="text-black font-semibold">{brand}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Direction;
