import React from "react";

const ProductDetailsInfo = () => {
  return (
    <div className="font-Lato px-5 mt-10">
      <div className="max-w-[1440px] mx-auto pb-40">
        {/* TOP TABS */}
        <div className="flex gap-16 justify-center text-sm font-bold text-[#9D9D9D] border-b border-[#D9D9D9]">
          <span className="text-[#262626] pb-4 cursor-pointer">
            PRODUCT DETAILS
          </span>
          <span className="cursor-pointer">REVIEWS (5)</span>
          <span className="cursor-pointer">SHIPPING & PAYMENT</span>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-5 py-10">
          {/* LEFT SIDE */}
          <div>
            <h3 className="font-bold text-[#262626] mb-4">
              Product Description
            </h3>

            <p className="text-sm text-[#555] leading-6 mb-6">
              Short dress with a plunging V-neckline and tie detail. Wide
              sleeves falling below the elbow. Contrast bead details. Invisible
              back zip fastening.
            </p>

            <h3 className="font-bold text-[#262626] mb-4">
              Product Description
            </h3>

            <ul className="text-sm text-[#555] leading-7 flex flex-col gap-3">
              <li>• Length | Regular</li>
              <li>• Pattern | Floral</li>
              <li>• Size | 38</li>
              <li>• Fit | Regular fit</li>
              <li>• Age group | Adult</li>
              <li>• Leg opening | Wide leg</li>
              <li>• Sleeve length | Long sleeve</li>
              <li>• Package contents | 2 pcs</li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h3 className="font-bold text-[#262626] mb-4">Composition</h3>

            <p className="text-sm text-[#555] leading-6 mb-6">
              We work with monitoring programmes to ensure compliance with our
              social, environmental and health and safety standards for our
              products. To assess compliance, we have developed a programme of
              audits and continuous improvement plans.
              <br />
              OUTER SHELL <br />
              90% cotton · 10% linen
            </p>

            <h3 className="font-bold text-[#262626] mb-4">Care instructions</h3>

            <ul className="text-sm text-[#555] leading-7 flex flex-col gap-3">
              <li>• Machine wash at max. 30°C/86°F with short spin cycle</li>
              <li>• Iron at a maximum of 110°C/230°F</li>
              <li>• Do not dry clean</li>
              <li>• Do not tumble dry</li>
              <li>• Wash inside out</li>
              <li>• Wash separately</li>
            </ul>
          </div>
        </div>

        {/* FULL WIDTH BORDER */}
        <div className="w-full border-b border-[#EDEDED] mt-4"></div>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
