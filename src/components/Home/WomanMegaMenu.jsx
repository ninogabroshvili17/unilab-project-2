import React from "react";

const WomanMegaMenu = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full max-w-[1067px] font-Lato bg-white shadow-lg rounded-b-lg">
      <div className="mx-auto flex p-6">
        <div className="grid grid-cols-4 grid-rows-2 h-[340px] gap-x-12 gap-y-10">
          {data.columns.map((col, index) => (
            <div
              key={col.title}
              className={`min-w-[145.25px] ${index === 3 ? "row-span-2" : ""}`}
            >
              <h4 className="text-sm font-bold text-[#262626] mb-4 uppercase">
                {col.title}
              </h4>

              <ul className="text-sm text-[#555555] flex flex-col gap-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#FF7A00]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-[278px] h-[340px]">
          <img
            src={data.image}
            alt="Woman category"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WomanMegaMenu;
