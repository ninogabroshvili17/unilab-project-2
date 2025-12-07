import { useState } from "react";
import whiteCheck from "../../assets/icons/whiteCheck.svg";

const CustomCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer select-none mb-4"
      onClick={() => setChecked(!checked)}
    >
      <div
        className={`
          w-4 h-4 rounded flex items-center justify-center 
          transition-all
          ${
            checked
              ? "bg-[#4172DC] border-[#4172DC]"
              : "border border-[#CFCFCF] bg-white"
          }
        `}
      >
        {checked && <img src={whiteCheck} className="w-3 h-2" />}
      </div>

      <span className="text-sm text-[#555]">{label}</span>
    </div>
  );
};

// <FilterSection title={filterData.style.title}>
//   {filterData.style.items.map((s) => (
//     <label
//       key={s}
//       className="flex items-center gap-2.5 text-sm text-[#555] mb-4 cursor-pointer"
//     >
//       <input type="checkbox" className="accent-[#4172DC]" />
//       {s}
//     </label>
//   ))}
// </FilterSection>;

export default CustomCheckbox;
