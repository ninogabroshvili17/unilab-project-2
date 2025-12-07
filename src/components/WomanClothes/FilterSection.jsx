import { useState } from "react";
import dropdownGray from "../../assets/icons/dropdownGray.svg";

const FilterSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full border-b border-[#EDEDED] mt-7">
      <div
        className="flex justify-between items-center cursor-pointer mb-5"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-bold text-sm text-[#262626]">{title}</h4>
        <img
          src={dropdownGray}
          className={`w-[9px] h-[5px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && <div>{children}</div>}
    </div>
  );
};

export default FilterSection;
