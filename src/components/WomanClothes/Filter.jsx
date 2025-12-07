import React from "react";
import FilterSection from "./FilterSection";
import { filterData } from "../../data/filterData";
import filterCategories from "../../assets/icons/filterCategories.svg";
import searchGray from "../../assets/icons/searchGray.svg";

const Filter = () => {
  return (
    <aside className="w-[213px]">
      <div className="flex items-center gap-4 mb-[38px]">
        <img src={filterCategories} className="w-4 h-4" />
        <h3 className="font-extrabold">All Categories</h3>
      </div>

      {/* Brand */}
      <FilterSection title={filterData.brand.title}>
        <div className="border border-[#D9D9D9] rounded px-4 py-2 flex items-center gap-2 mb-7 mt-3">
          <input
            type="text"
            placeholder="Search"
            className="text-xs text-black w-full outline-none"
          />
          <img src={searchGray} className="w-4 h-4" />
        </div>
      </FilterSection>

      {/* Model */}
      <FilterSection title={filterData.model.title}>
        {filterData.model.items.map((m) => (
          <div key={m.name} className="flex justify-between mt-5 mb-1.5">
            <span className="text-sm text-[#555]">{m.name}</span>
            <span className="text-xs text-[#9D9D9D]">{m.count}</span>
          </div>
        ))}
      </FilterSection>

      {/* Style */}
      <FilterSection title={filterData.style.title}>
        {filterData.style.items.map((s) => (
          <label
            key={s}
            className="flex items-center gap-2.5 text-sm text-[#555] mb-4 cursor-pointer"
          >
            <input type="checkbox" className="accent-[#4172DC]" />
            {s}
          </label>
        ))}
      </FilterSection>

      {/* Color*/}
      <FilterSection title={filterData.colors.title}>
        <div className="grid grid-cols-6 gap-[13px] mb-7">
          {filterData.colors.items.map((color) => (
            <div
              key={color}
              className="w-[25px] h-[25px] rounded-full cursor-pointer border-none"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </FilterSection>

      {/* Size */}
      <FilterSection title={filterData.size.title}>
        <div className="grid grid-cols-4 gap-[5px] mb-7">
          {filterData.size.items.map((size) => (
            <span
              key={size}
              className="text-center py-[5px] text-sm text-[#555555] font-bold border rounded border-[#D9D9D9] cursor-pointer bg-white"
            >
              {size}
            </span>
          ))}
        </div>
      </FilterSection>

      {/* Price */}
      <FilterSection title="PRICE">
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            className="border text-xs px-2 py-1 rounded w-20"
            placeholder="$ 60"
          />
          <input
            type="number"
            className="border text-xs px-2 py-1 rounded w-20"
            placeholder="$ 450"
          />
        </div>
        <input type="range" className="w-full" />
      </FilterSection>
    </aside>
  );
};

export default Filter;
