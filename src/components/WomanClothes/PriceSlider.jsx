import React, { useState } from "react";

const PriceSlider = () => {
  const MIN = 0;
  const MAX = 500;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  // clamp values within allowed range
  const clamp = (num) => Math.max(MIN, Math.min(MAX, num));

  return (
    <div>
      {/* PRICE INPUTS */}
      <div className="flex justify-between mb-4 items-center">
        {/* MIN INPUT */}
        <div className="relative">
          <span className="absolute left-8 top-1/2 -translate-y-1/2  text-[#555555]">
            $
          </span>

          <input
            type="number"
            value={minPrice === "" ? "" : minPrice}
            onChange={(e) => {
              let val = e.target.value;

              // Allow empty (so user can delete everything)
              if (val === "") {
                setMinPrice("");
                return;
              }

              val = clamp(Number(val));

              if (val <= maxPrice) setMinPrice(val);
            }}
            className="
              border border-[#C4C4C4] rounded w-[86px]
              text-[#555555] text-sm py-2.5 text-center pl-6
              focus:border-[#4172DC] outline-none

              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none
            "
          />
        </div>

        <span className="text-sm text-[#C4C4C4]">—</span>

        {/* MAX INPUT */}
        <div className="relative">
          <span className="absolute left-8 top-1/2 -translate-y-1/2 text-[#555555]">
            $
          </span>

          <input
            type="number"
            value={maxPrice === "" ? "" : maxPrice}
            onChange={(e) => {
              let val = e.target.value;

              if (val === "") {
                setMaxPrice("");
                return;
              }

              val = clamp(Number(val));

              if (val >= minPrice) setMaxPrice(val);
            }}
            className="
              border border-[#C4C4C4] rounded w-[86px]
              text-[#555555] text-sm py-2.5 text-center pl-6
              focus:border-[#4172DC] outline-none

              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none
            "
          />
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative h-5 mt-1">
        {/* track */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full bg-[#D9D9D9] rounded"></div>

        {/* selected blue range */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#4172DC] rounded"
          style={{
            left: `${((minPrice || 0) / MAX) * 100}%`,
            width: `${(((maxPrice || 0) - (minPrice || 0)) / MAX) * 100}%`,
          }}
        />

        {/* LEFT THUMB */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice || 0}
          onChange={(e) => {
            const v = clamp(Number(e.target.value));
            if (v <= maxPrice) setMinPrice(v);
          }}
          className="
            absolute w-full bg-transparent appearance-none pointer-events-none

            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#4172DC]
          "
        />

        {/* RIGHT THUMB */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice || 0}
          onChange={(e) => {
            const v = clamp(Number(e.target.value));
            if (v >= minPrice) setMaxPrice(v);
          }}
          className="
            absolute w-full bg-transparent appearance-none pointer-events-none

            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#4172DC]
          "
        />
      </div>

      {/* LABELS */}
      <div className="flex justify-between mt-8 mb-4 text-sm text-[#9D9D9D]">
        <span>Minimum ${minPrice || 0}</span>
        <span>Maximum ${maxPrice || 0}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
